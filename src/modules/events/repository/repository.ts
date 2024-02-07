import type mongoose from "mongoose";
import type IEvent from "../entities/IEvent";
import EventModel from "./model";
import BaseRepository from "../../../lib/base/baseRepository";
import BulkModel from "../repositoryBulk/model";
import BulkErrorModel from "../repositoryBulk/modelError";
import { FilterQuery } from "mongoose";

class Repository extends BaseRepository<IEvent> {
  private readonly eventModel: mongoose.Model<IEvent>;

  constructor() {
    super(EventModel);
    this.eventModel = EventModel;
  }

  async search(
    filter: FilterQuery<IEvent>,
    limit: number,
    skip: number
  ): Promise<any> {
    const datalength = await this.eventModel.find(filter).countDocuments();
    const data = await this.eventModel.find(filter).limit(limit).skip(skip);
    return { data, datalength };
  }
  async getByUploadId(uploadId: string, limit: number, skip: number) {
    return await BulkErrorModel.find({ uploadId }).limit(limit).skip(skip);
  }

  async getBulk(): Promise<any> {
    return await BulkModel.find();
  }

  async getLimit(limit: number, skip: number): Promise<any> {
    const datalength = await this.eventModel.countDocuments();
    const data = await this.eventModel.find().limit(limit).skip(skip);
    return { data, datalength };
  }

  async findByType(type: string, limit: number, skip: number): Promise<any> {
    try {
      const datalength = await this.eventModel
        .find({ type: type })
        .countDocuments();
      const data = await this.eventModel
        .find({ type: type })
        .limit(limit)
        .skip(skip);
      return { data, datalength };
    } catch (error) {
      console.log("error in repository", error);
    }
  }

  async UpdateById(eventId: string, dataToUpdate: IEvent): Promise<any> {
    return await this.eventModel.findByIdAndUpdate(eventId, dataToUpdate, {
      new: true,
    });
  }

  async deleteById(eventId: string): Promise<any> {
    return await this.eventModel.deleteOne({ _id: eventId });
  }

  async uploadCsv(data: any): Promise<any> {
    return await this.eventModel.insertMany(data, { ordered: false });
  }
}

export default new Repository();
