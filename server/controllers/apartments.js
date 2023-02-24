import Apartment from '../models/Apartment.js';
import Admin from '../models/Admin.js';

export const createApartment = async (req, res) => {
   try {
         const { street, houseNumber, houseType, price, floor, floorMax, apartmentArea, numberRooms, bathroom, sellerName, seller, commission, sellerPhone } = req.body;

         const admin = await Admin.findById(req.adminId);

      const newApartment = new Apartment({
         street, 
         houseNumber, 
         houseType, 
         price, 
         floor, 
         floorMax, 
         apartmentArea, 
         numberRooms, 
         bathroom, 
         sellerName, 
         seller, 
         commission, 
         sellerPhone, 
         realtor: admin.adminname,
      });

      await newApartment.save();
      await Admin.findByIdAndUpdate(req.adminId, {
         $push: { apartments: newApartment },
      });
      res.json(newApartment);
   } catch (error) {
      console.log(error);
   }
}