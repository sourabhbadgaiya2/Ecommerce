import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import OurStore from "../pages/OurStore";
import Blog from "../pages/Blog";
import CompareProducts from "../pages/CompareProducts";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import SingleBlog from "../pages/SingleBlog";

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
          <Route path='blog/:id' element={<SingleBlog />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='compare-products' element={<CompareProducts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
