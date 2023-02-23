import jwt  from "jsonwebtoken";
import { JWT_SECRED } from "../index.js";


export const checkAuth = (req, res, next) => {
   // Вітягуємо сам токен без того що спереду та пробілу завдяки replace(/Bearer\s?/, '');
   const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
   if(token) {
      try {
         const decoded = jwt.verify(token, JWT_SECRED);
         req.adminId = decoded.id;

         next();
      } catch(error) {
         return res.json({
            message: 'Немає доступу.',
         });
      }
   } else {
      return res.json({
         message: 'Немає доступу.',
      });
   }
}