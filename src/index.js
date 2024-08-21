import ReactDOM from "react-dom/client";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./business/layout";
import Buss from "./business/Buss";
import Other from "./business/Other";
import Contact from "./business/Contact";
import Home from "./business/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Buss />} />
          <Route path="Other" element={<Other />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);