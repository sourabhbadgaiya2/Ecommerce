import React from "react";
import {
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiSearch,
  FiMenu,
} from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className='bg-dark text-light py-1 small'>
        <div className='container d-flex flex-wrap justify-content-between align-items-center'>
          <span>Free Shipping Over $100 & Free Returns</span>
          <span>Hotline: (888) 4344 6000 - (888) 1358 8193</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className='py-3 header-top-strip text-white'>
        <div className='container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3'>
          <h4 className='mb-0'>Digitic.</h4>

          {/* Search Bar */}
          <div className='flex-grow-1 '>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Product Here...'
              />
              <button className='btn btn-warning'>
                <FiSearch />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className='d-flex align-items-center text-center gap-4'>
            <div className='text-light d-flex align-items-center gap-2 small'>
              <MdCompareArrows size={20} />
              <div>
                Compare <br /> Products
              </div>
            </div>
            <div className='text-light small d-flex align-items-center gap-2'>
              <FiHeart size={20} />
              <div>
                Favourite <br /> Wishlist
              </div>
            </div>
            <div className='text-light small d-flex text-left align-items-center gap-2'>
              <FiUser size={20} />
              <div>
                Log In <br /> My Account
              </div>
            </div>
            <div className='text-light small d-flex align-items-center gap-2'>
              <FiShoppingCart size={20} />
              <div>
                0 <br /> $0.00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className='bg-dark text-light py-2'>
        <div className='container d-flex flex-wrap align-items-center gap-4'>
          {/* Shop Categories Dropdown */}
          <div className='dropdown '>
            <button
              className='btn btn-dark dropdown-toggle d-flex align-items-center'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <FiMenu className='me-2' /> Shop Categories
            </button>
            <ul className='dropdown-menu '>
              <li>
                <Link className='dropdown-item' href='#'>
                  Action
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' href='#'>
                  Another Action
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links */}
          <NavLink to='/' className='text-light text-decoration-none'>
            Home
          </NavLink>
          <NavLink to='/store' className='text-light text-decoration-none'>
            Our Store
          </NavLink>
          <NavLink to='/blogs' className='text-light text-decoration-none'>
            Blogs
          </NavLink>
          <NavLink to='/contact' className='text-light text-decoration-none'>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
