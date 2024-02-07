import { type FilterQuery } from 'mongoose';
import { type IUser } from '.';

interface IQueryName extends FilterQuery<IUser> {
  name: string;
}

export default IQueryName;
