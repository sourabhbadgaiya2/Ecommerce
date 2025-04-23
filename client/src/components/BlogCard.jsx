import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../features/blog/blogSlice";

const BlogCard = () => {
  const dispatch = useDispatch();
  const { getAllBlog } = useSelector((state) => state.blog.blog);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <>
      {getAllBlog?.map((b, i) => (
        <div className='col-md-4 mb-4' key={i}>
          <div className='blog-card bg-white p-3 shadow-sm rounded'>
            <div className='card-image mb-3'>
              <img src={b.image} alt={b.title} className='img-fluid rounded' />
            </div>
            <div className='blog-content'>
              <p className='date text-muted mb-2'>1 Dec 2025</p>
              <h5 className='title font-bold mb-2'>{b.title}</h5>
              <p className='desc mb-3'>{b.description}</p>
              <Link to={`/blog/${b._id}`} className='btn btn-dark'>
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
