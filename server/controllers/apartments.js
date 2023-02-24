import Apartment from '../models/Apartment.js';
import Admin from '../models/Admin.js';

// Create apartment
export const createApartment = async (req, res) => {
   try {
      const { street, houseNumber, metro, houseType, price, floor, floorMax, apartmentArea, numberRooms, bathroom, sellerName, sellerType, commission, sellerPhone,  } = req.body;
      const admin = await Admin.findById(req.adminId);

      const newApartment = new Apartment({
         street,
         houseNumber,
         metro,
         houseType,
         price,
         floor, 
         floorMax, 
         apartmentArea, 
         numberRooms, 
         bathroom, 
         sellerName, 
         sellerType, 
         commission, 
         sellerPhone,
         adminname: admin.adminname,
         realtorAdmin: req.adminId,
      });

      await newApartment.save();
      await Admin.findByIdAndUpdate(req.adminId, {
         $push: { apartments: newApartment },
      });
      res.json(newApartment);
   } catch (error) {
      res.json({ message: `Что-то пошло не так. ${error}` });
   }
}