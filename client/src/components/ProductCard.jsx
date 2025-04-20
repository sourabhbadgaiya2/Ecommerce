import React from "react";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = ({ grids }) => {
  let location = useLocation();

  return (
    <div className="flex gap-4 flex-wrap">
      <div
        className={`${
          location.pathname == "/store" ? `gr-${grids}` : "col-3"
        }`}
      >
        <Link to={"#"} className='product-card overflow-hidden'>
          <div className='product-image'>
            <img src='images/watch.jpg' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havel's</h6>
            <h5 className='product-title'>
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <div style={{ padding: 20 }}>
              <StarRatings
                rating={3}
                starRatedColor='gold'
                numberOfStars={5}
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
                  <img src='images/view.svg' className='w-6 my-2' alt='view' />
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

            <p className='price'>$100</p>
          </div>
        </Link>
      </div>

      <div
        className={`${
          location.pathname == "/store" ? `gr-${grids}` : "col-3"
        }`}
      >
        <Link to={"#"} className='product-card overflow-hidden'>
          <div className='product-image'>
            <img src='images/watch.jpg' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havel's</h6>
            <h5 className='product-title'>
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <div style={{ padding: 20 }}>
              <StarRatings
                rating={3}
                starRatedColor='gold'
                numberOfStars={5}
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
                  <img src='images/view.svg' className='w-6 my-2' alt='view' />
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

            <p className='price'>$100</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
