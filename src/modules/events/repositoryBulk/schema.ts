import { Schema } from 'mongoose';
import { type IBulkData } from '../entities/IBulkData';

const BulkSchema: Schema = new Schema<IBulkData>(
    {
        uploadId: { type: String, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        noOfItemsToBeInserted: { type: Number, required: true },
        fileName: { type: String, required: true },
        successfulInserted: { type: Number, required: true },
        failedDuringInsert: { type: Number, required: true },
    },
    {
        timestamps: true,
    },
);

export default BulkSchema;
