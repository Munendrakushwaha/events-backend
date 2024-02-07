import { type Document } from 'mongoose';

export interface IBulkError extends Document {
  uploadId: string;
  rowNumber: number;
  errorMessage: string[];
}
