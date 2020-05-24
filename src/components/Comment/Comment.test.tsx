import React from 'react';
import { render } from '@testing-library/react';
import Comment from './Comment';

it('Renders a single comment panel block w/o data', () => {
  const { getByText } = render(<Comment />);

  const username = getByText(/user/i);
  const timeElapsed = getByText(/unknown/i);
  const loading = getByText(/Loading/i);

  expect(username).toBeInTheDocument();
  expect(timeElapsed).toBeInTheDocument();
  expect(loading).toBeInTheDocument();
});
