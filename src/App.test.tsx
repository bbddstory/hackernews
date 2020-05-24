import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('Renders top stories panel w/o data', () => {
  const { getByText } = render(<App />);

  const panelTitle = getByText(/Hacker News/i);
  const loadingBlock = getByText(/Loading/i);

  expect(panelTitle).toBeInTheDocument();
  expect(loadingBlock).toBeInTheDocument();
});
