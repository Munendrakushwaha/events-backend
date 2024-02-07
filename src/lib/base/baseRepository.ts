import { type Document, type FilterQuery, type Model } from "mongoose";
import type mongoose from "mongoose";

class BaseRepository<T extends Document> {
  private readonly model: mongoose.Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public async insert(data: T): Promise<any> {
    return await this.model.insertMany(data);
  }

  public async findByField(filter: FilterQuery<T>): Promise<any> {
    return await this.model.find(filter);
  }
}

export default BaseRepository;
