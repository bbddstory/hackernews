import React from 'react';
import { render } from '@testing-library/react';
import CommentsList from './CommentsList';

it('Renders comments list panel w/o data', () => {
  const { getByText } = render(<CommentsList />);

  const panelTitle = getByText(/Top [0-9]+ Comments/i);
  const loading = getByText(/Loading/i);

  expect(panelTitle).toBeInTheDocument();
  expect(loading).toBeInTheDocument();
});
