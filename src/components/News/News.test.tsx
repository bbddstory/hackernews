import React from 'react';
import { render } from '@testing-library/react';
import News from './News';

it('Renders a single comment panel block w/o data', () => {
  const { getByText } = render(<News itemId={23294294} />);

  const comments = getByText(/comments/i);
  const username = getByText(/user/i);
  const timeElapsed = getByText(/unknown/i);
  const loading = getByText(/Loading/i);

  expect(comments).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(timeElapsed).toBeInTheDocument();
  expect(loading).toBeInTheDocument();
});
