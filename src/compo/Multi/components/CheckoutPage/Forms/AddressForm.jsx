import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckBoxField, SelectField } from '../../FormFields';
// import { useFormikContext } from "formik";

const cities = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '1',
    label: 'New York',
  },
  {
    value: '2',
    label: 'Chicago',
  },
  {
    value: '3',
    label: 'Saigon',
  },
];

const states = [
  {
    value: undefined,
    label: 'None',
  },
  {
    value: '11',
    label: 'Florida',
  },
  {
    value: '22',
    label: 'Michigan',
  },
  {
    value: '33',
    label: 'Texas',
  },
];

const countries = [
  {
    value: null,
    label: 'None',
  },
  {
    value: '111',
    label: 'United States',
  },
  {
    value: '222',
    label: 'Italy',
  },
  {
    value: '333',
    label: 'Vietnam',
  },
];

export default function AddressForm(props) {
  // const formValues = useFormikContext();
  // console.log("AddressForm Values", formValues);
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            name={firstName.name}
            label={firstName.label}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={lastName.name}
            label={lastName.label}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={address1.name}
            label={address1.label}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            required
            name={zipcode.name}
            label={zipcode.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <CheckBoxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
