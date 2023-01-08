import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Products } from "./pages/Products/Products";
import NoPage from "./pages/NoPage";
import Contact  from "./pages/Contact";
 import About   from "./pages/About/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import  Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <div className="App" id="background-img">
      <nav><NavBar/></nav>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="home" element={<Home />}/>
      <Route path="shop" element={<Products />}/>
      <Route path="*" element={<NoPage />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />}/>
    </Routes>
    <footer> <Footer/> </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
