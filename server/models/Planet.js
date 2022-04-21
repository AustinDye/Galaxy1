import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  planetId: { type: Number, required: true },
  homeStar: { type: String, required: true },
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
