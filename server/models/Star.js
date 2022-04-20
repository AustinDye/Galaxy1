import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({
  starId: { type: Number, required: true },
  location: { type: String, required: true },
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
