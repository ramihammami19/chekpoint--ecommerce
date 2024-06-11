import dbConnect from "../../../../db"
import Product from "../../../../models/produit.model"





export async function POST(request: Request) {
    
    await dbConnect()
   const body = await request.json()
   const newProduc = await Product.create(body)
   console.log(body);
   
    return Response.json({})
  }