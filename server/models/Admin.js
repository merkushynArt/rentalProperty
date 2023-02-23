import monngoose from 'mongoose';

const AdminSchema = new monngoose.Schema(
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
            type: monngoose.Schema.Types.ObjectId,
            ref: 'Apartment',
         },
      ],
   },
   //Для історії створення квартири в базі
   {timestamps: true},
);

export default monngoose.model('Admin', AdminSchema);