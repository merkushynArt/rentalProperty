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
      metro: {
         type: String,
      },
      houseType: {
         type: String,
      },
      price: {
         type: String,
      },
      floor: {
         type: String,
      },
      floorMax: {
         type: String,
      },
      apartmentArea: {
         type: String,
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
      sellerType: {
         type: String,
      },
      commission: {
         type: String,
      },
      sellerPhone: {
         type: String,
      },
      adminname: { 
         type: String ,
      },
      realtorAdmin: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Admin',
      },
      description: {
         type: String,
      }
   },
   { timestamps: true },
);

export default mongoose.model('Apartment', ApartmentSchema);