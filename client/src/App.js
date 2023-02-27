import { Layout } from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./pages/MainPage.jsx";
import { AddApartmentPage } from "./pages/AddApartmentPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { ApartmentPage } from "./pages/ApartmentPage.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { getMe } from "./redux/features/auth/authSlice.js";
import { useEffect } from "react";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMe());
   }, [dispatch]);
   
   return (
      <Layout>
         <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path="/new" element={<AddApartmentPage/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/:id" element={<ApartmentPage/>} />
         </Routes>

         <ToastContainer position='top-right' />
      </Layout>
   );
}

export default App;
