import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import Product from "../../../../../models/produit.model";
import dbConnect from "../../../../../db";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
export async function POST(req:Request) {
 const body = await req.json()
 
    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          body.img,
          { folder: "cld", resource_type: "auto" },
          async function (error, result) {
            if (error) {
              console.log(error);
              reject(error);
             
            }
             else {
                // const newProduct = Product.create({})
                delete body.img
                body.imageSrc = result?.secure_url
                console.log(body,"here")
                await dbConnect()
              const p =  await Product.create(body)
                console.log(p);
                
            resolve(result);
          }
          }
        );
      });
    return Response.json(result)
  }


