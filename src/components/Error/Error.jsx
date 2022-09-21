import React from 'react';
import {
  ErrorContainer,
  ErrorStrong,
  ErrorMessage,
} from './ErrorStyles';

const Error = () => (
  <ErrorContainer>
    <ErrorStrong>404</ErrorStrong>
    <ErrorMessage>Oops, This Page Not Found</ErrorMessage>
  </ErrorContainer>
);

export default Error;
