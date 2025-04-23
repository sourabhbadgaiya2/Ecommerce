import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const SpecialProduct = () => {
  return (
    <div className='bg-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 h-100 d-flex flex-column'>
      <div className='flex flex-col md:flex-row gap-4 p-4 h-full'>
        {/* Image Section */}
        <div className='md:w-40 w-full'>
          <img
            src='images/watch.jpg'
            alt='product'
            className='w-full h-40 md:h-auto object-cover rounded-lg'
          />
        </div>

        {/* Product Info */}
        <div className='flex flex-col justify-between flex-1'>
          <div>
            <h6 className='text-sm text-gray-500 font-semibold mb-1'>
              Havel's
            </h6>
            <h5 className='text-lg font-semibold mb-2 leading-snug'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>

            <StarRatings
              rating={3}
              starRatedColor='gold'
              numberOfStars={5}
              starDimension='20px'
              starSpacing='3px'
            />

            <p className='mt-2 text-red-600 font-semibold text-lg'>
              $100{" "}
              <span className='line-through text-gray-400 text-base'>
                $200
              </span>
            </p>
          </div>

          {/* Timer & Stock Section */}
          <div className='mt-3'>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-sm font-medium text-gray-600'>5 days left</p>
              <div className='flex gap-1'>
                {["1", "1", "1"].map((time, idx) => (
                  <span
                    key={idx}
                    className='bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm'
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>

            <div className='mb-3'>
              <p className='text-sm text-gray-600'>Products left: 5</p>
              <div className='w-full bg-gray-200 rounded-full h-2.5 mt-1'>
                <div
                  className='bg-green-500 h-2.5 rounded-full'
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to='/cart'
              className='inline-block w-full text-center bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition'
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
