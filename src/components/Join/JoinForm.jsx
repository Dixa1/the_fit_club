/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./JoinForm.css";

const JoinForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    membership: "",
    goals: "",
    experience: "",
    referral: "",
    interests: [],
    bloodType: "",
    injuries: "",
    medicalReport: "",
    personalReport: "",
  };

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "dob", label: "Date of Birth", type: "date" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["--choose--", "Male", "Female", "Other"],
    },
    { name: "address", label: "Address", type: "textarea" },
    { name: "city", label: "City", type: "text" },
    { name: "state", label: "State", type: "text" },
    { name: "zipcode", label: "Zip Code", type: "text" },
    {
      name: "membership",
      label: "Membership Type",
      type: "select",
      options: ["--choose-- ", "Basic", "Standard", "Premium"],
    },
    { name: "goals", label: "Fitness Goals", type: "textarea" },
    {
      name: "experience",
      label: "Fitness Experience Level",
      type: "select",
      options: ["--choose--", "Beginner", "Intermediate", "Advanced"],
    },
    { name: "referral", label: "How did you hear about us?", type: "text" },
    {
      name: "interests",
      label: "Fitness Interests",
      type: "checkbox",
      options: ["Weightlifting", "Cardio", "Yoga"],
    },
    { name: "bloodType", label: "Blood Type", type: "text" },
    {
      name: "injuries",
      label: "Previous Injuries/Illnesses",
      type: "textarea",
    },
    { name: "medicalReport", label: "Medical Report", type: "file" },
    { name: "personalReport", label: "Personal Report", type: "file" },
  ];

  const validationSchema = Yup.object().shape(
    fields.reduce((schema, field) => {
      schema[field.name] =
        field.type === "checkbox"
          ? Yup.array().min(1, "At least one option must be selected")
          : Yup.string().required(`${field.label} is required`);
      return schema;
    }, {})
  );

  const onSubmit = (values, { resetForm }) => {
    alert("Thank you for your valuable time. We will reach you soon.");
    console.log("Form data", values);
    resetForm();
  };

  return (
    <div className="form-container" id="join">
       <h1 className="text-3xl font-bold text-center sm:text-4xl ">
          Gym <span className="text-primary">Membership</span> Form
        </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {fields.map((field, index) => (
            <div className="form-control" key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "select" ? (
                <Field as="select" id={field.name} name={field.name}>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              ) : field.type === "textarea" ? (
                <Field as="textarea" id={field.name} name={field.name} />
              ) : field.type === "checkbox" ? (
                field.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <Field
                      type="checkbox"
                      id={`${field.name}-${optionIndex}`}
                      name={field.name}
                      value={option}
                    />
                    <label htmlFor={`${field.name}-${optionIndex}`}>
                      {option}
                    </label>
                  </div>
                ))
              ) : (
                <Field type={field.type} id={field.name} name={field.name} />
              )}
              <ErrorMessage
                name={field.name}
                component="div"
                className="error"
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default JoinForm;
