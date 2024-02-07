import mongoose, { type Model } from 'mongoose';
import UserSchema from './schema';
import { type IUser } from '../entities';

const UserModel: Model<IUser> = mongoose.model<IUser>('users', UserSchema);
export default UserModel;
