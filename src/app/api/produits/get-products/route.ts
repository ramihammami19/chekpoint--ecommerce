import dbConnect from "../../../../../db"
import Product from "../../../../../models/produit.model"





export async function GET(request: Request) {
    
    await dbConnect()
    const { searchParams } = new URL(request.url)
    const cat = searchParams.get('cat')    
    console.log(cat);
    
   const list = await Product.find({category: cat})
   console.log(list);
   
    return Response.json(list)
  }