import mongoose, { type Model } from 'mongoose';
import BulkSchema from './schema';
import { type IBulkData } from '../entities/IBulkData';

const BulkModel: Model<IBulkData> = mongoose.model<IBulkData>(
    'BulkUpload',
    BulkSchema,
);
export default BulkModel;
