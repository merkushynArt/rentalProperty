import Admin from "../models/Admin.js";
import bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRED } from "../index.js";

//Registration admin
export const registration = async (req, res) => {
   try {
      //Тут використовуються фігурні дужки, щоб витягти username і password з об'єкта req.body. Це називається деструктуризація об'єкта. Деструктуризація дозволяє отримувати значення з об'єкта чи масиву і надавати їх окремим змінним.
      const { adminname, password } = req.body;

      const isUsed = await Admin.findOne({ adminname });
      if(isUsed) {
         res.json({massage: 'Таке ім*я вже використовується.'});
      }

      //bcrypt.genSaltSync() це функція JavaScript, яка використовується для створення рядка солі для хешування паролів. Сіль є випадково згенерованим рядком букв, цифр та символів, що використовується для посилення безпеки пароля. Параметр 10, переданий bcrypt.genSaltSync() задає довжину солі.
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newAdmin = new Admin({
         adminname,
         password: hash,
      });

      //Використовується функція jwt.sign() для створення нового jwt токена, який містить ідентифікатор нового адміністратора. Також вказано час життя токена – 30 днів.
      const token = jwt.sign(
         {
            id: newAdmin._id,
         },
         JWT_SECRED,
         { expiresIn: '30d' },
      );

      await newAdmin.save();

      res.json({
         newAdmin,
         token,
         massage: 'Реєстрація пройшла успішно.',
      });
   } catch(error) {
      res.json({ massage: 'Помилка при створенні адміністратора.' });
   }
}

export const login = async (req, res) => {
   try {
      const { adminname, password } = req.body;

      const admin = await Admin.findOne({ adminname });
      if(!adminname) { 
         return res.json({ massage: 'Такого адмінітратора немає.', }) 
      }

      //Функція compare перевіряє, чи введений користувачем пароль співпадає з паролем, що зберігається в базі даних.
      const isPasswordCorrect = await bcrypt.compare(password, admin.password);
      if(!isPasswordCorrect) {
         return res.json({ massage: 'Ви невірно ввели пароль.' });
      }

      const token = jwt.sign(
         {
            id: admin._id,
         },
         JWT_SECRED,
         { expiresIn: '30d' },
      );

      res.json({
         token,
         admin,
         massage: `Вітаю ${ admin.adminname })`,
      });
   } catch (error) {
      res.json({ message: `Помилка при авторизації. ${error}`, });
   }
}