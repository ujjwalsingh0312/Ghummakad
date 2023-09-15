import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyFooter } from "../../components/Footer/Footer.js";
import { LoginBody } from "../../components/Loginbox/Loginbox.js";
import { Composepage } from "../Composepage/Composepage.js";
import { Deletepage } from "../Deletepage/Deletepage.js";
import { Homepage } from "../Homepage/Homepage.js";
import { Myblogpage } from "../Myblogspage/Myblogspage.js";
import { Readpage } from "../Readpage/Readpage.js";
import { UserReadpage } from "../Readpage/UserReadpage.js";
import { Registerpage } from "../Registerpage/Registerpage.js";
import { Updateuserpage } from "../Updateuserpage/Updateuserpage.js";
import { UserHome } from "../UserHome/UserHome.js";

export const Finalpage = () => {
  return (
    <BrowserRouter>
      <div className="finalbody">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginBody />} />
          <Route path="/compose" element={<Composepage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/readmyblog" element={<Myblogpage />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/readbycategory" element={<Readpage />} />
          <Route path="/updateuser" element={<Updateuserpage />} />
          <Route path="/userreadbycategory" element={<UserReadpage />} />
          <Route path="/deleteuser" element={<Deletepage />} />
        </Routes>
      </div>
      <br />
      <br />
      <MyFooter />
    </BrowserRouter>
  );
};