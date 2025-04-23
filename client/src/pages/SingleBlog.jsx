import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { Link, useParams } from "react-router-dom";
import { AiOutlineBackward } from "react-icons/ai";
import { base_url } from "../utils/axiosConfig";

const SingleBlog = () => {
  const { id } = useParams();

  const init = async () => {
    try {
      const response = await axios
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title={"Dynamic Blog Name"} />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            {/* Sidebar */}

            {/* Blog Cards */}
            <div className='col-12'>
              <Link
                className='btn d-flex align-items-center cursor-pointer'
                to={"/blogs"}
              >
                <AiOutlineBackward />
                <span> Go Back to Blogs</span>
              </Link>
              <div className='single-blog-card mt-4'>
                <h3 className='title'>
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src='images/blog-1.jpg'
                  alt='blg'
                  className='img-fluid w-100 my-4'
                />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  numquam rem placeat est. Fugit odio mollitia exercitationem
                  vero nisi culpa veritatis velit asperiores dolores
                  deleniti?Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Nemo, quo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
