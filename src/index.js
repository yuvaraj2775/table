import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./business/layout";
import Buss from "./business/Buss";
import Other from "./business/Other";
import Contact from "./business/Contact";
import Home from "./business/Home";
import Orderpg from "./Tabpg.js/Orderpg";

import Purchaseorder from "./Purchase/Purchaseorder";
import OtherDetailspg from "./Tabpg.js/OtherDetailspg";

import Profilepg from "./business/profile/Profilepg";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Buss />} />
          <Route path="Other" element={<Other />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Home" element={<Home/>}/>
          <Route path="Orderpg" element={<Orderpg/>}/>
          <Route path="OtherDetailspg " element={<OtherDetailspg/>} />
        
          <Route path="Purchaseorder" element={<Purchaseorder/>}/>
     
          <Route path="Profilepg" element={<Profilepg/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);