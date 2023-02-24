import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
   {
      adminname: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      adminPhone: {
         type: String,
         required: true,
      },
      apartments: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Apartment',
         },
      ],
   },
   //Для історії створення квартири в базі
   {timestamps: true},
);

export default mongoose.model('Admin', AdminSchema);