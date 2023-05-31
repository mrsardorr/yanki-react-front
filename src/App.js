import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Layer from "./Layer/Layer";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HowToPay from "./Pages/HowToPay/HowToPay";
import Return from "./Pages/Return/Return";
import Catalog from "./Pages/Catalog/Catalog";
import { Admin } from "./Pages/Admin";
import Favourite from "./Pages/Favourite/Favourite";
import Korzina from "./Pages/Korzina/Korzina";
import RequireAuth from "./Components/requireAuth";
import Cabinet from "./Pages/Cabinet/Cabinet";
import History from "./Pages/History/History";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Link to="/">back</Link>} />
        
          <Route path="/" element={<Layer />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<AboutUs/>}/>
            <Route path="favourite" element={<Favourite />} />
            <Route path="korzina" element={<Korzina />} />
            <Route path="howtopay" element={<HowToPay />} />
            <Route path="return" element={<Return />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="products/:productId" element={<Product />} />

            <Route element={<RequireAuth allowedRole={"USER"} />}>
            <Route path="history" element={<History />} />
            <Route path="cabinet" element={<Cabinet />} />
            </Route>


            

              <Route path="admin" element={<Admin />} />
            <Route element={<RequireAuth allowedRole={"ADMIN"} />}>
            </Route>
          </Route>
        
      </Routes>
    </>
  );
}

export default App;
