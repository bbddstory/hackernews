import React from 'react';
import { render } from '@testing-library/react';
import NewsList from './NewsList';

it('Renders comments list panel w/o data', () => {
  const { getByText } = render(<NewsList />);

  const panelTitle = getByText(/Hacker News - Top [0-9]+ Stories/i);
  const loading = getByText(/Loading/i);

  expect(panelTitle).toBeInTheDocument();
  expect(loading).toBeInTheDocument();
});
