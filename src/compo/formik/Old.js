import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const validate = (values) => {
  let errors = {};
  if (!values.name) errors.name = 'Name required';
  if (!values.email) errors.email = 'email required';
  if (!values.channel) errors.channel = 'channel required';

  return errors;
};
const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => console.log('formik', values);

const validateSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Email is required'),
  channel: Yup.string().required('Channel is required'),
});

const Old = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  const {
    values: { name, email, channel },
    errors: { name: nameError, email: emailError, channel: channelError },
    handleChange,
    handleSubmit,

    handleBlur,
    touched: {
      name: nameTouched,
      email: emailTouched,
      channel: channelTouched,
    },
    getFieldProps,
  } = formik;
  console.log('formikformik', formik);
  // getFieldProps = name,onChange,onBlur,value
  // console.log('getFieldProps', getFieldProps('name'));
  return (
    <>
      <h1>Formik</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...getFieldProps('name')} />
          {nameError && nameTouched && (
            <h4 style={{ color: 'red' }}>{nameError}</h4>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...getFieldProps('email')} />
          {emailError && emailTouched && (
            <h4 style={{ color: 'red' }}>{emailError}</h4>
          )}
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...getFieldProps('channel')} />
          {channelError && channelTouched && (
            <h4 style={{ color: 'red' }}>{channelError}</h4>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Old;
