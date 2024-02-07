import { type Document } from 'mongoose';
import { type IAddress } from './index';

interface IEvent extends Document {
  name: string;
  address: IAddress; // IAddress
  description: string;
  startDate: Date;
  endDate: Date;
  category: string; // enum limited
  organizerInfo: string; // array of objects- multiple organizers
  type: string;
  status: string; // enum
  createdAt: string; // updated at
}
export default IEvent;
