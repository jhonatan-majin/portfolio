import mongoose, { Schema, model, Model } from 'mongoose';
// import { IHero } from '../interfaces';

const heroSchema = new Schema({
    image: { type: String },
    titles: [{ type: String }],
    title0: { type: String },
    title1: { type: String },
    title2: { type: String },
    cv: { type: String },
    description: { type: String },
}, {
    timestamps: true
});

heroSchema.index({ title: 'text' });

// const Hero = model<IHero>('Hero', heroSchema);

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;