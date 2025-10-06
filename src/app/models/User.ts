import mongoose, { Schema, model, Model } from 'mongoose';

const userSchema = new Schema(
 {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  role: {
   type: String,
   enum: {
    values: ['admin', 'client', 'super-user', 'SEO'],
    message: '{VALUE} no es un role válido',
    default: 'client',
    required: true,
   },
  },
 },
 {
  versionKey: false,
  timestamps: true,
 },
);

userSchema.index({ title: 'text' });

const User = mongoose.model('User', userSchema);

export default User;
