import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div>
      <div className=''>
        <div className='blog-card bg-white'>
          <div className='card-image'>
            <img src='images/blog-1.jpg' alt='' className='img-fluid' />
          </div>
          <div className='blog-content'>
            <p className='date'>1 Dec 2025</p>
            <h5 className='title'>Lorem ipsum dolor sit amet.</h5>
            <p className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              dolorem recusandae expedita!
            </p>
            <Link to={"/"} className='button bg-dark p-3'>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
