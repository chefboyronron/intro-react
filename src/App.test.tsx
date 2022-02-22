import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Links', () => {
  render(<App />);
  const linkElement = document.getElementsByTagName('a');
  for (let i = 0; i < linkElement.length; i++) {
    expect(linkElement[i]).toBeInTheDocument();
  }
});
