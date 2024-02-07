import { type FilterQuery } from 'mongoose';
import { type IEvent } from '.';

interface IQueryType extends FilterQuery<IEvent> {
  type: string;
}

export default IQueryType;
