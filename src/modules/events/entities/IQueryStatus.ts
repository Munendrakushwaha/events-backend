import { type FilterQuery } from 'mongoose';
import { type IEvent } from '.';

interface IQueryStatus extends FilterQuery<IEvent> {
  status: string;
}

export default IQueryStatus;
