import { type Document } from 'mongoose';

interface ILogin extends Document {
  email: string;
  password: string;
}

export default ILogin;
