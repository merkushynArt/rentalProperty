import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 3002 || 3001;

async function start() {
   try {
      //для підголтовки к оновленню mongoose
      mongoose.set('strictQuery', false);      
      await mongoose.connect('mongodb+srv://realtor:realtorBest@cluster0.507gpuq.mongodb.net/rentalProperty?retryWrites=true&w=majority');

      app.listen(PORT, () => {
         console.log(`server started on http://localhost:${PORT}/`);
      });
   } catch(error) {
      console.log(error);
   }
}
start();