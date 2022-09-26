import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css";
import SiteLayout from "./SiteLayout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Logout from "./Logout";
import Account from "./Account";
import NotFound from "./NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </>
  );
}
