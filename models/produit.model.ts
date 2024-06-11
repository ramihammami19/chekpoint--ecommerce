import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  imageSrc: string;
}
// bech n3mel  roiter ou5ra faha list mt33 produit w route whda ou5ra faha post
const ProductSchema: Schema<IProduct> = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },

    price: { type: Number, required: true, min: 0 },
    // Uncomment these fields as needed
    category: { type: String, required: true },
    // brand: { type: String, required: true },
    // stock: { type: Number, required: true, min: 0 },
    imageSrc: { type: String, required: true },
    description: { type: String, required: true },
    // ratings: { type: Number, required: true, min: 0, max: 5 },
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
  }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
