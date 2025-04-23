import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const Wishlist = () => {
  return (
    <div>
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />
      <div className='compare-products-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row gy-4'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='compare-product-card position-relative p-3 border rounded h-100 bg-white shadow-sm'>
                <img
                  src='images/cross.svg'
                  alt='close'
                  className='position-absolute top-0 end-0 m-2 cross img-fluid'
                  style={{ width: "20px", cursor: "pointer" }}
                />
                <div className='product-card-image text-center mb-3'>
                  <img
                    src='images/watch.jpg'
                    alt='watch'
                    className='img-fluid'
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title fw-bold fs-6'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price text-success'>$100</h6>
                </div>
              </div>
            </div>
            {/* Repeat for other compare cards */}
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='compare-product-card position-relative p-3 border rounded h-100 bg-white shadow-sm'>
                <img
                  src='images/cross.svg'
                  alt='close'
                  className='position-absolute top-0 end-0 m-2 cross img-fluid'
                  style={{ width: "20px", cursor: "pointer" }}
                />
                <div className='product-card-image text-center mb-3'>
                  <img
                    src='images/watch.jpg'
                    alt='watch'
                    className='img-fluid'
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title fw-bold fs-6'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price text-success'>$100</h6>
                </div>
              </div>
            </div>
            {/* repeat */}
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='compare-product-card position-relative p-3 border rounded h-100 bg-white shadow-sm'>
                <img
                  src='images/cross.svg'
                  alt='close'
                  className='position-absolute top-0 end-0 m-2 cross img-fluid'
                  style={{ width: "20px", cursor: "pointer" }}
                />
                <div className='product-card-image text-center mb-3'>
                  <img
                    src='images/watch.jpg'
                    alt='watch'
                    className='img-fluid'
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title fw-bold fs-6'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price text-success'>$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
