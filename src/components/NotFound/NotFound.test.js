import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound.js';

test('Sort the Products', () => {
  const tree = render(<NotFound/>);
  expect(tree).toMatchSnapshot();
});