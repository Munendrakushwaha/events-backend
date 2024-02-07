import { Schema } from 'mongoose';
import { type IUser } from '../entities';

const UserSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
});

export default UserSchema;
