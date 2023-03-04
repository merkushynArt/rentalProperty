import Apartment from '../models/Apartment.js';
import Admin from '../models/Admin.js';

// Create apartment
/*
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
         adminPhone: admin.adminPhone,
         realtorAdmin: req.adminId,
      });

      await newApartment.save();
      await Admin.findByIdAndUpdate(req.adminId, {
         $push: { apartments: newApartment },
      });
      return res.json(newApartment);
   } catch (error) {
      res.json({ message: `Что-то пошло не так. ${error}` });
   }
}
*/
export const createApartment = async (req, res) => {
   try {
      const admin = await Admin.findById(req.adminId);

      const newApartment = new Apartment({
         ...req.body,
         adminname: admin.adminname,
         adminPhone: admin.adminPhone,
         realtorAdmin: req.adminId,
      });

      await newApartment.save();
      await Admin.findByIdAndUpdate(req.adminId, {
         $push: { apartments: newApartment },
      });
      return res.json(newApartment);
   } catch (error) {
      res.status(500).json({ message: `Что-то пошло не так. ${error}` });
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

//Remove apartment
export const removeApartment = async (req, res) => {
   try {
      const apartment = await Apartment.findByIdAndDelete(req.params.id);
      if(!apartment) {
         return res.json({ message: 'Такого посту немає.' });
      }

      await Admin.findByIdAndUpdate( req.adminId, {
         $pull: { apartments: req.params.id },
      });

      return res.json({ message: 'Квартира успішно видалена з бази.' });
   } catch (error) {
      res.json({ message: 'Щось пішло не так.' });
   }
}

// Update apartment

export const updateApartment = async (req, res) => {
   try {
      const { title,
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
         img, id } = req.body;


      const apartment = await Apartment.findById(id);

      apartment.title = title;
      apartment.street = street;
      apartment.houseNumber = houseNumber;
      apartment.metro = metro;
      apartment.houseType = houseType;
      apartment.price = price;
      apartment.floor = floor;
      apartment.floorMax = floorMax;
      apartment.apartmentArea = apartmentArea;
      apartment.numberRooms = numberRooms;
      apartment.bathroom = bathroom; 
      apartment.sellerName = sellerName;
      apartment.sellerType = sellerType;
      apartment.commission = commission;
      apartment.sellerPhone = sellerPhone;
      apartment.description = description;
      apartment.img = img;

      await apartment.save();

      res.json(apartment);
   } catch (error) {
      res.json({ message: `Щось пішло не так. ${error}` });
   }
}
/*
export const updateApartment = async (req, res) => {
   try {
     const { id } = req.params;
     const { 
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
      } = req.body;

      if (!title || !street || !houseNumber || !metro || !houseType || !price || !floor || !floorMax || !apartmentArea || !numberRooms || !bathroom || !sellerName || !sellerType || !commission || !sellerPhone || !description || !img) {
         return res.status(400).json({ message: 'Недостаточно данных для обновления квартиры' });
       }
 
       const apartment = await Apartment.findByIdAndUpdate(
         id,
         {
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
         },
         { new: true }
       );
 
       if (!apartment) {
         return res.status(404).json({ message: 'Квартира не найдена' });
       }
 
     res.json(apartment);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: `Внутренняя ошибка сервера...${error}` });
   }
 };
*/
/*
export const updateApartment = async (req, res) => {
   try {
     const { id } = req.params;
     const {
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
     } = req.body;
 
     const apartment = await Apartment.findByIdAndUpdate(
       id,
       {
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
       },
       { new: true }
     );
 
     if (!apartment) {
       return res.status(404).json({ message: 'Квартира не найдена' });
     }
 
     res.json(apartment);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: `Внутренняя ошибка сервера...${error}` });
   }
 };
*/
