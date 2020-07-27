import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import TextError from './TextError';

interface Props {
  label: string;
  name: string;
}

const DatePicker = (props: Props) => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={label}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
