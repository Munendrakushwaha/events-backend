import { type Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export default IUser;
