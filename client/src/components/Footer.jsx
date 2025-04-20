import React from "react";
import { FiLinkedin, FiGithub, FiYoutube, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const FooterLinkGroup = ({ title, links }) => (
  <div className='col-3 col-md-2 mb-4'>
    <h4 className='text-white mb-4'>{title}</h4>
    <div className='footer-links d-flex flex-column'>
      {links.map((text, index) => (
        <Link key={index} className='text-white py-2 mb-1' to='#'>
          {text}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer text-white'>
      {/* Newsletter Signup */}
      <div className='py-4 border-bottom'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-md-5 d-flex align-items-center gap-3'>
              <img src='/images/newsletter.png' alt='Newsletter' width={30} />
              <h2 className='m-0 fs-4'>Sign Up for Newsletter</h2>
            </div>
            <div className='col-md-7 mt-3 mt-md-0 '>
              <form className='input-group border  rounded'>
                <input
                  type='email'
                  className='form-control border-0 px-3 py-2'
                  placeholder='Your email address'
                  aria-label='Email address'
                  required
                />
                <button className='btn  px-4 rounded-end' type='submit'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className='py-5 fs-6'>
        <div className='container-xxl'>
          <div className='row'>
            {/* Contact Info */}
            <div className='col-md-4 mb-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <address className='mb-2'>
                Hno: 277 Near Vill Chopal, <br />
                Sonipat, Haryana, 131103
              </address>
              <a href='tel:+918264554454' className='d-block text-white mb-2'>
                +91 8264554454
              </a>
              <a
                href='mailto:sourabh@example.com'
                className='d-block text-white mb-3'
              >
                sourabh@example.com
              </a>
              <div className='d-flex gap-3'>
                <a href='#' aria-label='LinkedIn'>
                  <FiLinkedin size={24} />
                </a>
                <a href='#' aria-label='GitHub'>
                  <FiGithub size={24} />
                </a>
                <a href='#' aria-label='YouTube'>
                  <FiYoutube size={24} />
                </a>
                <a href='#' aria-label='Instagram'>
                  <FiInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Footer Link Sections */}
            <FooterLinkGroup
              title='Information'
              links={[
                "Privacy Policy",
                "Refund Policy",
                "Shipping Policy",
                "Terms & Conditions",
                "Blogs",
              ]}
            />
            <FooterLinkGroup
              title='Account'
              links={["About Us", "FAQ", "Contact"]}
            />
            <FooterLinkGroup
              title='Quick Links'
              links={["Laptops", "Headphones", "Tablets", "Watches"]}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='py-3 border-top'>
        <div className='container-xxl'>
          <p className='text-center m-0'>
            &copy; {currentYear} | Powered by Developer's Corner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
