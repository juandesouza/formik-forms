import React, { ReactNode } from 'react';

interface Props {}

const TextError: React.FC = ({ children }) => {
  return <div className='error'>{children}</div>;
};

export default TextError;
