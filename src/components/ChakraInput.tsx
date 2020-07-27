import React from 'react';
import { Field } from 'formik';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/core';

interface Props {
  label: string;
  name: string;
}

const ChakraInput = (props: Props) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
          >
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field} />
            {/*<FormHelperText id='email-helper-text'>
              We'll never share your email.
        </FormHelperText>*/}
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraInput;
