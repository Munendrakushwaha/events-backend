import { Schema } from 'mongoose';
import { type IBulkError } from '../entities/IBulkError';

const BulkErrorSchema: Schema = new Schema<IBulkError>({
    uploadId: { type: String, required: true },
    rowNumber: { type: Number, required: true },
    errorMessage: { type: [String], required: true },
});

export default BulkErrorSchema;
