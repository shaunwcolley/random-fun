import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

test('renders learn react link', () => {
  const { getByText } = render(<Grid />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});