import React from "react";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <div>
      {/* Blog Section */}
      <section className='blog-wrapper-2 pt-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row mb-5'>
            {[...Array(4)].map((_, index) => (
              <div className='col-md-3' key={index}>
                <BlogCard />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='blog-wrapper-2 pt-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row mb-5'>
            <ProductCard />
          </div>
        </div>
      </section>

      {/* Special Products Section */}
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row mb-4'>
            <div className='col-12'>
              <h2 className='section-heading'>Special Products</h2>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
