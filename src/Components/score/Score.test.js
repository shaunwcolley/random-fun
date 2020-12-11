import React from 'react';
import { render } from '@testing-library/react';
import SCcore from './Score';

test('renders learn react link', () => {
  const { getByText } = render(<Score />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});