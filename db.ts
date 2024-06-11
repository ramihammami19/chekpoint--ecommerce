import mongoose from "mongoose";

const  dbConnect = async () => {
    try {
      console.log("Connecting to database...");
      const conn = await mongoose.connect(
        process.env.MONGODB || "",
      );
      mongoose.set("strictQuery", false);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error:any) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };
  
  export default dbConnect