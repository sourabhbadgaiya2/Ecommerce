import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div>
      <Meta title={"Reset Password"} />
      <BreadCrumb title={"Reset Password"} />

      <div className='forgot-password-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='auth-card p-4 rounded shadow-sm bg-white'>
                <h3 className='text-center mb-2'>Reset Password</h3>
                <p className='text-center mb-4'>
                  We will send you an email to reset your password
                </p>
                <form>
                  <div className='mb-3'>
                    <input
                      type='Password'
                      name='Password'
                      className='form-control'
                      placeholder='Password'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='Password'
                      name='Confirm Password'
                      className='form-control'
                      placeholder='Confirm Password'
                      required
                    />
                  </div>

                  <div className='text-center'>
                    <button type='submit' className='btn btn-dark px-4'>
                      Ok
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
