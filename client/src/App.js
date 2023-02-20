import { Layout } from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./pages/MainPage.jsx";
import { AllApartmentsPage } from "./pages/AllApartmentsPage.jsx";
import { AddApartmentPage } from "./pages/AddApartmentPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";

function App() {
   return (
      <Layout>
         <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/apartments' element={<AllApartmentsPage/>} />
            <Route path="/new" element={<AddApartmentPage/>}/>
            <Route path="/login" element={<LoginPage/>} />
         </Routes>
      </Layout>
   );
}

export default App;
