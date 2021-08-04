import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
const ErrorCompo = ({ children }) => (
  <h3 style={{ color: 'crimson' }}>{children}</h3>
);
const validate = (values) => {
  let errors = {};
  if (!values.name) errors.name = 'Name required';
  if (!values.email) errors.email = 'Email required';
  if (!values.channel) errors.channel = 'Channel required';
  if (!values.address) errors.address = 'Address required';
  if (!values.comments) errors.comments = 'Comments required';

  return errors;
};
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
};

const onSubmit = (values) => console.log('formik', values);
const New = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field
            type="text"
            name="name"
            placeholder="Name Error Compo without compo"
          />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Channel</label>
          <Field
            type="text"
            name="channel"
            placeholder="Chennel withy Proper"
            validate={(val) => {
              console.log('vhannel Val', val);
              return !val && 'Enter Channellllllll';
            }}
          />
          <ErrorMessage name="channel" component={ErrorCompo} />
        </div>
        <div>
          <label>Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Error with child compo"
          />
          <ErrorMessage name="email">
            {(props) => {
              console.log('Email error ', props);
              return <h1>{props}</h1>;
            }}
          </ErrorMessage>
        </div>
        <div>
          <label>Address</label>
          <Field name="address">
            {(props) => {
              const { field, meta, form } = props;
              console.log('AddressProps', props);
              return (
                <>
                  <input type="text" {...field} />
                  {meta.error && meta.touched && <h2>{meta.error}</h2>}
                </>
              );
            }}
          </Field>
        </div>
        <div>
          <label>Commenets</label>
          <Field as="textarea" name="comments" />
          <ErrorMessage name="comments" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default New;
