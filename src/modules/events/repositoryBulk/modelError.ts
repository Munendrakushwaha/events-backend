import mongoose, { type Model } from 'mongoose';
import BulkErrorSchema from './schemaError';
import { IBulkError } from '../entities/IBulkError';

const BulkErrorModel: Model<IBulkError> = mongoose.model<IBulkError>(
    'BulkError',
    BulkErrorSchema,
);

export default BulkErrorModel;
