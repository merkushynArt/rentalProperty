import Apartment from '../models/Apartment.js';
import Admin from '../models/Admin.js';

// Create apartment
export const createApartment = async (req, res) => {
   try {
      const { title, street, houseNumber, metro, houseType, price, floor, floorMax, apartmentArea, numberRooms, bathroom, sellerName, sellerType, commission, sellerPhone, description, img } = req.body;
      const admin = await Admin.findById(req.adminId);

      const newApartment = new Apartment({
         title,
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
         description,
         img,
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

//Get all apartments
export const getAll = async (req, res) => {
   try {
      const apartments = await Apartment.find().sort('-createdAt');
      if(!apartments) {
         res.json({ massage: 'Квартир немає.' });
      }

      res.json({ apartments });
   } catch (error) {
      res.json({ massage: 'Щось пішло не так' });
   }
}

//Get apartment By Id
export const getById = async (req, res) => {
   try {
      const apartment = await Apartment.findById(req.params.id);

      res.json(apartment);
   } catch (error) {
      res.json({ massage: 'Щось пішло не так' });
   }
}