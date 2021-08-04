import React from 'react';
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
  FieldArray,
  FastField,
} from 'formik';
const ErrorCompo = ({ children }) => (
  <h5 style={{ color: 'crimson' }}>{children}</h5>
);
const validate = (values) => {
  let errors = {};
  if (!values.name) errors.name = 'Name required';
  if (!values.email) errors.email = 'E mail required';
  if (!values.channel) errors.channel = 'Channel required';
  if (!values.address) errors.address = 'Address required';
  //   if (!values.comments) errors.comments = 'Comments required';
  //   if (!values?.social.fb) errors.social.fb = 'Facebook required';
  //   if (!values?.social.tw) errors.social.tw = 'Twitter required';
  //   if (!values?.phNo[0]) errors.phNo[0] = 'Primary required';
  //   if (!values?.phNo[1]) errors.phNo[1] = 'Secondary required';

  return errors;
};
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    fb: '',
    tw: '',
  },
  phNo: [],
  phNoS: ['', ''],
};

const onSubmit = (values) => console.log('formik', values);

const Three = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        <div>
          <label>Name</label>
          <FastField
            type="text"
            name="name"
            placeholder="Name Error Compo without compo"
          />
          <ErrorMessage name="name" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label>Email</label>
          <FastField
            type="email"
            name="email"
            placeholder="Error with child compo"
          />
          <ErrorMessage name="email" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label>Channel</label>
          <FastField
            type="text"
            name="channel"
            placeholder="Chennel withy Proper"
          />
          <ErrorMessage name="channel" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label>Address</label>
          <FastField name="address" />
          <ErrorMessage name="address" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label>Commenets</label>
          <FastField
            as="textarea"
            name="comments"
            validate={(val) => !val && 'Enter Comments'}
          />
          <ErrorMessage name="comments" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label>Facebook</label>
          <FastField
            type="text"
            name="social.fb"
            validate={(val) => !val && 'Enter Fb'}
          />
          <ErrorMessage name="social.fb" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label>Twitter</label>
          <FastField
            type="text"
            name="social.tw"
            validate={(val) => !val && 'Enter Tw'}
          />
          <ErrorMessage name="social.tw" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label htmlFor="phNo[0]">One phone</label>
          <FastField
            type="text"
            id="phNo[0]"
            name="phNo[0]"
            validate={(val) => !val && 'Enter FPhone One'}
          />
          <ErrorMessage name="phNo[0]" component={ErrorCompo} />
        </div>
        <br />
        <div>
          <label htmlFor="phNo[1]">Second phone</label>
          <FastField
            type="text"
            id="phNo[1]"
            name="phNo[1]"
            validate={(val) => !val && 'Enter Phone Two'}
          />
          <ErrorMessage name="phNo[1]" component={ErrorCompo} />
        </div>
        <br />
        <hr />
        <div>
          <label htmlFor="phNoS">List Of No.</label>
          <FieldArray name="phNoS">
            {(props) => {
              const {
                push,
                remove,
                form: {
                  values: { phNoS },
                },
              } = props;
              console.log('FieldArray', props);
              return (
                <div>
                  {phNoS.map((ph, index) => (
                    <div key={index}>
                      <FastField
                        name={`phNoS[${index}]`}
                        validate={(val) => !val && `Enter No:-${index}`}
                      />
                      <ErrorMessage
                        name={`phNoS[${index}]`}
                        component={ErrorCompo}
                      />
                      <button onClick={() => push('')}>+</button>
                      {index > 1 && (
                        <button onClick={() => remove(index)}>-</button>
                      )}
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Three;
