import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <Meta title={"Contacts"} />
      <BreadCrumb title={"Contacts"} />
      <div className='contact-wrapper  py-5 home-wrapper-2'>
        <div className='container-xxl '>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src='https://maps.google.com/maps?q=bhopal&output=embed'
                className='border-0 w-100'
                frameborder='0'
                width={600}
                height={450}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5 '>
              <div className='contact-inner-wrapper bg-white  d-flex justify-content-around p-5'>
                <div className='w-1/2'>
                  <h3 className='contact-title'>Contact</h3>
                  <form action='' className='flex flex-col gap-4'>
                    <div>
                      <input
                        type='text'
                        className='form-control '
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control '
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control '
                        placeholder='Phone Number'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        className='form-control'
                        placeholder='Comment'
                        cols={30}
                        rows={4}
                      ></textarea>
                    </div>
                    <div>
                      <button className='btn btn-secondary border-0'>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className=''>
                  <h3 className='contact-title'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 flex  gap-2'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Hno: 277 Near Vill Chopal, Sonipat, Haryana, 131103
                        </address>
                      </li>
                      <li className='mb-3 flex  gap-2'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+918264554454' className='text-black'>
                          +91 8264554454
                        </a>
                      </li>
                      <li className='mb-3 flex  gap-2'>
                        <AiOutlineMail className='fs-5' />
                        <a
                          href='mailto:sourabh@example.com'
                          className='d-block text-black '
                        >
                          sourabh@example.com
                        </a>
                      </li>
                      <li className='mb-3 flex  gap-2'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday - Friday 10 AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
