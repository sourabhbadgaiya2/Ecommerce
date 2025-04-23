import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { getAllProducts } from "../features/products/ProductSlice";

const ProductCard = ({ grids }) => {
  let location = useLocation();

  const { data } = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  // console.log(data, "dsa");
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className='flex gap-4 flex-wrap'>
      {data?.map((p, i) => (
        <div
          className={`${
            location.pathname == "/store" ? `gr-${grids}` : "col-3"
          }`}
        >
          <Link to={"#"} className='product-card overflow-hidden'>
            <div className='product-image'>
              <img
                className='w-[20vw]'
                src={p.images[0].url}
                alt='product image'
              />
            </div>
            <div className='product-details'>
              <h6 className='brand'>{p.brand}</h6>
              <h5 className='product-title'>{p.title}</h5>
              <div style={{ padding: 20 }}>
                <StarRatings
                  rating={3}
                  starRatedColor='gold'
                  numberOfStars={p.ratings}
                  starDimension='25px'
                  starSpacing='5px'
                />
              </div>
              <div className='action-bar position-absolute '>
                <div className='d-flex flex-column'>
                  <Link>
                    <img src='images/add-cart.svg' className='w-6' alt='car' />
                  </Link>
                  <Link>
                    <img
                      src='images/view.svg'
                      className='w-6 my-2'
                      alt='view'
                    />
                  </Link>
                  <Link>
                    <img
                      src='images/prodcompare.svg'
                      className='w-6'
                      alt='compare'
                    />
                  </Link>
                </div>
              </div>

              <p className='price'>${p.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
