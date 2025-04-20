import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import OurStore from "../pages/OurStore";
import Blog from "../pages/Blog";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='store' element={<OurStore />} />
          <Route path='blogs' element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
