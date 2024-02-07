import { type Response, type Request } from "express";
import { Service } from "./index";
import { type IEvent } from "./entities";
import { IBulkData } from "./entities/IBulkData";
import BulkErrorModel from "./repositoryBulk/modelError";

class Controller {
  get = async (req: Request, res: Response): Promise<any> => {
    try {
      const { current, pageSize, query } = req.query;
      const limit: number = parseInt(pageSize as string, 10);
      const skip: number =
        (parseInt(current as string, 10) - 1) *
        parseInt(pageSize as string, 10);
      if (!query) {
        const data = await Service.getLimit(limit, skip);
        return res.status(200).json(data);
      }
      if (String(query).endsWith("Filter")) {
        const type = String(query).replace("Filter", "");
        const data = await Service.findByType(type, limit, skip);
        return res.status(200).json(data);
      }
      const data = await Service.search(query, limit, skip);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  getByUploadId = async (req: Request, res: Response): Promise<any> => {
    try {
      const { uploadId } = req.params;
      const { current, pageSize } = req.query;
      const limit: number = parseInt(pageSize as string, 10);
      const skip: number =
        parseInt(current as string, 10) * parseInt(pageSize as string, 10);
      const data: any = await Service.getByUploadId(uploadId, limit, skip);
      const count = await BulkErrorModel.countDocuments({ uploadId: uploadId });
      return res.status(200).json({ data, datalength: count });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  getBulk = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: IBulkData = await Service.getBulk();
      return res.status(200).json({ data: response });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  add = async (req: Request, res: Response): Promise<any> => {
    try {
      const eventData: IEvent = req.body;

      await Service.add(eventData);
      return res.status(200).json({ msg: "Event added Successfully" });
    } catch (error) {
      return res.status(500).json({ "Error Occurred": error });
    }
  };

  getById = async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;

      const event: any = await Service.findById(id);
      if (event.length !== 0) {
        return res.status(200).json({ data: event });
      } else {
        return res.status(404).json({ message: "No event found" });
      }
    } catch (error) {
      return res.status(500).json({ "Error Occured": error });
    }
  };

  updateById = async (req: Request, res: Response): Promise<any> => {
    const eventId: string = req.params.id;
    const dataToUpdate: IEvent = req.body;
    try {
      const updatedEvent: any = await Service.UpdateById(eventId, dataToUpdate);
      console.log("upfated event: ", updatedEvent);

      return res.status(200).json({ success: true, data: updatedEvent });
    } catch (error) {
      return res.status(500).json({
        error,
      });
    }
  };

  deleteById = async (req: Request, res: Response): Promise<any> => {
    const eventId: string = req.params.id;
    try {
      const response: any = await Service.deleteById(eventId);

      return res.status(200).json({ response });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error deleting event",
      });
    }
  };

  uploadCsv = async (req: Request, res: Response): Promise<any> => {
    try {
      const fileName: any = req.file?.originalname;
      const filePath: string | undefined = req.file?.path;
      if (!filePath) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      await Service.uploadCsv({ fileName, filePath });
      return res.status(200).json({
        message: "CSV data uploaded and saved to MongoDB successfully",
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}

export default new Controller();
