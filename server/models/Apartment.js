import mongoose from 'mongoose';

const ApartmentSchema = new mongoose.Schema(
   {
      street: {
         type: String,
         required: true,
      },
      houseNumber: {
         type: String,
      },
      
      houseType: {
         type: String,
      },
      price: {
         type: String,
         required: true,
      },
      floor: {
         type: String,
      },
      floorMax: {
         type: String,
      },
      apartmentArea: {
         type: String
      },
      numberRooms: {
         type: String,
      },
      bathroom: {
         type: String,
      },
      sellerName: {
         type: String,
      },
      seller: {
         type: String,
      },
      commission: {
         type: String,
      },
   },
   { timestamps: true },
);

export default mongoose.model('Apartment', ApartmentSchema);