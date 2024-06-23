/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./MembershipForm.css";

const MembershipForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    membershipType: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    membershipType: Yup.string().required("Membership type is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    alert("Thank you for your valuable time. We will reach you soon.");
    console.log("Form data", values);
    resetForm();
  };

  return (
    <>
      <span id="membershipForm"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <h1 className="text-3xl font-bold text-center sm:text-4xl ">
          Request <span className="text-primary">Callback</span> From Us
        </h1>
        <div className="membership-form-container mt-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="membership-form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="membership-error"
                />
              </div>
              <div className="membership-form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="membership-error"
                />
              </div>
              <div className="membership-form-control">
                <label htmlFor="phone">Phone</label>
                <Field type="text" id="phone" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="membership-error"
                />
              </div>
              <div className="membership-form-control">
                <label htmlFor="membershipType">Membership Type</label>
                <Field
                  as="select"
                  id="membershipType"
                  name="membershipType"
                  className="membership-select"
                >
                  <option value="" label="Select membership type" />
                  <option value="basic" label="Gold" />
                  <option value="standard" label="Flexible" />
                  <option value="premium" label="Platinum" />
                </Field>
                <ErrorMessage
                  name="membershipType"
                  component="div"
                  className="membership-error"
                />
              </div>
              <button
                className="membership-btn inline-block rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-white mt-5 ml-12"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default MembershipForm;
