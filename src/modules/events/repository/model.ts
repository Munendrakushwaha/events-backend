import mongoose, { type Model } from 'mongoose';
import { type IEvent } from '../entities';
import EventSchema from './schema';

const EventModel: Model<IEvent> = mongoose.model<IEvent>('events', EventSchema);

export default EventModel;
