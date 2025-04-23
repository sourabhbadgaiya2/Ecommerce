import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const personSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().nullable().email("Email should be valid"),
  mobile: yup.string().required("Mobile Number is required"),
  password: yup.string().required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: personSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(registerUser(values));
      navigate("/login");
    },
  });

  return (
    <div>
      <Meta title={"Signup"} />
      <BreadCrumb title={"Signup"} />

      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='auth-card p-4 rounded shadow-sm bg-white'>
                <h3 className='text-center mb-4'>Signup</h3>
                <form onSubmit={formik.handleSubmit}>
                  <div className='mb-3'>
                    <input
                      type='text'
                      name='firstName'
                      className='form-control'
                      placeholder='First-Name'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className='text-danger'>
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>

                  <div className='mb-3'>
                    <input
                      type='text'
                      name='lastName'
                      className='form-control'
                      placeholder='Last-Name'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className='text-danger'>
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>

                  <div className='mb-3'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className='text-danger'>{formik.errors.email}</div>
                    )}
                  </div>

                  <div className='mb-3'>
                    <input
                      type='tel'
                      name='mobile'
                      className='form-control'
                      placeholder='Mobile Number'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                    />
                    {formik.touched.mobile && formik.errors.mobile && (
                      <div className='text-danger'>{formik.errors.mobile}</div>
                    )}
                  </div>

                  <div className='mb-3'>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className='text-danger'>
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <div className='d-flex justify-content-center gap-3'>
                    <button type='submit' className='btn btn-dark px-4'>
                      Signup
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

export default Signup;
