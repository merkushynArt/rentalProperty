import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoute from './routes/auth.js';
import apartmentRoute from './routes/apartments.js'

const app = express();

//Constants
const PORT = 3002 || 3001;
export const JWT_SECRED = 'secredPassword';

//Middleware
// Для відправки запросів з інших ip-адрусів
app.use(cors());
// Для того щоб express розумів що данні з клієнтскої частини будуть приходити у форматі json
app.use(express.json());

//Routes http://localhost:3002/
app.use('/api/auth', authRoute);
app.use('/api/apartments', apartmentRoute);

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