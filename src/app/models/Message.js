import mongoose, { Schema, model, Model } from 'mongoose';
// import { IMessage } from '../interfaces';

const messageSchema = new Schema({
    email: { type: String },
    subject: { type: String },
    message: { type: String },
}, {
    timestamps: true
});

messageSchema.index({ title: 'text' });

// const Message = model<IMessage>('Message', messageSchema);

const Message = mongoose.model('Message', messageSchema);

export default Message;