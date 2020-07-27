import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

interface Props {}

interface Values {
  email: string;
  description: string;
  selectOption: string;
  radioOption: string;
  checkboxOption: string[];
  birthDate: string;
}

const FormikContainer = (props: Props) => {
  const dropDownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [] as string[],
    birthDate: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable(),
  });

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    console.log('form data', values);
    console.log('saved data', JSON.parse(JSON.stringify(values)));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='email'
              name='email'
            />
            <FormikControl
              control='textarea'
              label='Description'
              name='description'
            />
            <FormikControl
              control='select'
              label='Select a topic'
              name='selectOption'
              options={dropDownOptions}
            />
            <FormikControl
              control='radio'
              label='Radio Topic'
              name='radioOption'
              options={radioOptions}
            />
            <FormikControl
              control='checkbox'
              label='Checkbox Topics'
              name='checkboxOption'
              options={checkboxOptions}
            />
            <FormikControl
              control='date'
              label='Pick a date'
              name='birthDate'
            />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
