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
          <div className='row'>
            <div className='col-12'>
              <h2 className='section-heading mb-4'>Latest Blogs</h2>
            </div>
            <BlogCard />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className='product-wrapper pt-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='section-heading mb-4'>Featured Products</h2>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>

      {/* Special Products Section */}
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='section-heading mb-4'>Special Products</h2>
            </div>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <SpecialProduct />
              </div>
              <div className='col-md-4 mb-4'>
                <SpecialProduct />
              </div>
              <div className='col-md-4 mb-4'>
                <SpecialProduct />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
