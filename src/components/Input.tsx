import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

interface Props {
  label: string;
  name: string;
}

const Input = (props: Props) => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
