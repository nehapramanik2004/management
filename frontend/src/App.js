import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import Forgot from "./Auth/Forgot";
import LayoutDashboard from "./Layout/LayoutDashboard";
import LayoutProduct from "./Layout/LayoutProduct";
import LayoutSuppliers from "./Layout/LayoutSuppliers";
import LayoutCustomer from "./Layout/LayoutCustomer";
import LayoutBanner from "./Layout/LayoutBanner";
import LayoutDiscount from "./Layout/LayoutDiscount";
import LayoutFinance from "./Layout/LayoutFinance";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/sign-in" element={<SignIn />}/>
        
        <Route path="/" element={<LayoutDashboard/>}/>
        <Route path="/dashboard" element={<LayoutDashboard/>}/>
        <Route path="/product" element={<LayoutProduct/>}/>
        <Route path="/Suppliers" element={<LayoutSuppliers/>}/>
        <Route path="/customer" element={<LayoutCustomer/>}/>
        <Route path="/banner" element={<LayoutBanner/>}/>
        <Route path="/discount" element={<LayoutDiscount/>}/>
        <Route path="/finance" element={<LayoutFinance/>}/>
        <Route path="/forgot-password" element={<Forgot />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;