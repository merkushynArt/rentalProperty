import monngoose from 'mongoose';

const AdminSchema = new monngoose.Schema(
   {
      adminname: {
         type: String,
         require: true,
         unique: true,
      },
      password: {
         type: String,
         require: true,
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