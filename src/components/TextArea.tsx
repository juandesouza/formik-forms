import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

interface Props {
  label: string;
  name: string;
}

const TextArea = ({ label, name, ...rest }: Props) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
