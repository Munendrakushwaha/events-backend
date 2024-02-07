import fs from "fs";
import csvParser from "csv-parser";
import { type IEvent } from "./entities";
import { Repository } from "./repository";
import BulkModel from "./repositoryBulk/model";
import JoiSchema from "./joiSchema";
import BulkErrorModel from "./repositoryBulk/modelError";

class Service {
  search = async (
    searchQuery: any,
    limit: number,
    skip: number
  ): Promise<any> => {
    const filter = { $text: { $search: searchQuery } };
    return await Repository.search(filter, limit, skip);
  };
  getByUploadId = async (
    uploadId: string,
    limit: number,
    skip: number
  ): Promise<any> => await Repository.getByUploadId(uploadId, limit, skip);

  getBulk = async (): Promise<any> => await Repository.getBulk();

  async add(eventData: IEvent): Promise<any> {
    return await Repository.insert(eventData);
  }

  async getLimit(limit: number, skip: number): Promise<any> {
    return await Repository.getLimit(limit, skip);
  }

  async findByType(type: string, limit: number, skip: number): Promise<any> {
    return await Repository.findByType(type, limit, skip);
  }

  async findById(_id: string): Promise<any> {
    const filter: { _id: string } = { _id };
    return await Repository.findByField(filter);
  }

  async UpdateById(eventId: string, dataToUpdate: IEvent): Promise<any> {
    return await Repository.UpdateById(eventId, dataToUpdate);
  }

  async deleteById(eventId: string): Promise<any> {
    return await Repository.deleteById(eventId);
  }

  async uploadCsv(fileInfo: {
    fileName: string;
    filePath: string;
  }): Promise<void> {
    const { fileName, filePath } = fileInfo;

    const dataToInsert: any[] = [];
    const validData: any[] = [];
    const invalidData: any[] = [];
    const startTime: string = new Date().toLocaleString();
    const uploadId = new Date().getTime().toString();

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row) => {
        // Process each row of the CSV and construct the data to be inserted
        // Customize this part according to your CSV columns and schema
        dataToInsert.push({
          name: row.name,
          address: {
            street: row.street,
            city: row.city,
            state: row.state,
            postalCode: row.postalCode,
            country: row.country,
          },
          description: row.description,
          startDate: row.startDate,
          endDate: row.endDate,
          category: row.category,
          organizerInfo: row.organizerInfo,
          type: row.type,
          status: row.status,
        });
      })
      .on("end", async () => {
        try {
          dataToInsert.forEach((item, index) => {
            const { error } = JoiSchema.bulkUpload().validate(item, {
              abortEarly: false,
            });
            if (!error) {
              validData.push(item);
            } else {
              invalidData.push({
                rowNumber: index + 1,
                uploadId,
                errorMessage: error?.details.map((items) => items.message),
              });
            }
          });
          const result: any = await Repository.uploadCsv(validData);

          // Remove the uploaded CSV file after processing
          fs.unlinkSync(filePath);

          await BulkErrorModel.insertMany(invalidData);

          const endTime: string = new Date().toLocaleString();

          // Create an entry in BulkModel (if this model exists) or handle accordingly
          await BulkModel.create({
            uploadId,
            startTime,
            endTime,
            noOfItemsToBeInserted: dataToInsert.length,
            successfulInserted: result.length,
            failedDuringInsert: dataToInsert.length - result.length,
            fileName,
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Error processing CSV:", error);
        }
      });
  }
}
export default new Service();
