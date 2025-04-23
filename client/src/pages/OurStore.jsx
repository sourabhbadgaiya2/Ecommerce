import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Meta from "../components/Meta";
import StarRatings from "react-star-ratings";
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  // alert(grid);

  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title={"Our Store"} />
      <div className='store-wrapper home-wrapper-2 my-4'>
        <div className='container-xxl'>
          <div className='row'>
            {/* Sidebar */}
            <div className='col-lg-3 col-md-4 col-sm-12 mb-3'>
              {/* Categories */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <ul className='list-unstyled mb-0'>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>

              {/* Filters */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>

                {/* Availability */}
                <h5 className='sub-title'>Availability</h5>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='in-stock'
                  />
                  <label className='form-check-label' htmlFor='in-stock'>
                    In Stock (1)
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='out-stock'
                  />
                  <label className='form-check-label' htmlFor='out-stock'>
                    Out of Stock (0)
                  </label>
                </div>

                {/* Price */}
                <h5 className='sub-title mt-3'>Price</h5>
                <div className='d-flex gap-2 align-items-end'>
                  <div className='form-group 0'>
                    <label htmlFor='priceFrom'>From</label>
                    <input
                      type='text'
                      className='form-control'
                      id='priceFrom'
                    />
                  </div>
                  <div className='form-group w-50'>
                    <label htmlFor='priceTo'>To</label>
                    <input type='text' className='form-control' id='priceTo' />
                  </div>
                </div>

                {/* Colors */}
                <h5 className='sub-title mt-3'>Colors</h5>
                <Color />

                {/* Size */}
                <h5 className='sub-title mt-3'>Size</h5>
                <div className='d-flex flex-wrap gap-2 align-items-center'>
                  <div className='form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='size-s'
                    />
                    <label className='form-check-label' htmlFor='size-s'>
                      S (2)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='size-h'
                    />
                    <label className='form-check-label' htmlFor='size-h'>
                      H (2)
                    </label>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div className='d-flex flex-wrap gap-2'>
                  {["Headphone", "Laptop", "Mobile", "Wire"].map((tag, i) => (
                    <span
                      key={i}
                      className='badge bg-light text-secondary py-2 px-3 rounded-3'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Random Products */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Products</h3>

                {[1, 2].map((item, index) => (
                  <div
                    key={index}
                    className={`random-products d-flex gap-3 ${
                      index !== 0 ? "mt-4" : ""
                    }`}
                  >
                    <div style={{ width: "80px", flexShrink: 0 }}>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='mb-1'>
                        Kids Headphone bulk 10 pack multi colored for students
                      </h6>
                      <div>
                        <StarRatings
                          rating={3}
                          starRatedColor='gold'
                          numberOfStars={5}
                          starDimension='20px'
                          starSpacing='3px'
                        />
                      </div>
                      <strong>$500</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className='col-lg-9 col-md-8 col-sm-12'>
              {/* Products will go here */}
              <div className='flex justify-between'>
                <div className='filter-sort-grid flex w-full justify-between'>
                  <div className='flex items-center gap-10'>
                    <p className='mb-0'>Sort By:</p>
                    <select name='' className='form-control form-select' id=''>
                      <option value='manual'>Featured</option>
                      <option value='best-selling' selected='selected'>
                        Best Selling
                      </option>
                      <option value='title-ascending'>
                        Alphabetically, A-Z
                      </option>
                      <option value='title-descending'>
                        Alphabetically, Z-A
                      </option>
                      <option value='price-ascending'>
                        Price, low to high
                      </option>
                      <option value='price-descending'>
                        Price, high to low
                      </option>
                      <option value='price-descending'>
                        Date, Date to new
                      </option>
                    </select>
                  </div>

                  <div className='flex items-center  gap-6'>
                    <p className='totalProducts'>21 Products</p>
                    <div className='flex gap-2 items-center grids'>
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src='images/gr4.svg '
                        className='d-block img-fluid cursor-pointer '
                        alt=''
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src='images/gr3.svg '
                        className='d-block img-fluid cursor-pointer '
                        alt=''
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src='images/gr2.svg '
                        className='d-block img-fluid cursor-pointer '
                        alt=''
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src='images/gr.svg'
                        className='d-block img-fluid cursor-pointer '
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='my-4 '>Our Products</h2>
              {/* Add product grid here */}
              <div className='product-list pb-5'>
                <ProductCard grids={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
