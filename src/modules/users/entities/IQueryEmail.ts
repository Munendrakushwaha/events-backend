import { type FilterQuery } from 'mongoose';
import { type IUser } from '.';

interface IQueryEmail extends FilterQuery<IUser> {
  email: string;
}
export default IQueryEmail;
