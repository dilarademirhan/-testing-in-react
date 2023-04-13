import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

it('Is the header rendered successfully', () => {
  render(<App/>);
  const emojiSearch = screen.getByText('Emoji Search');
  expect(emojiSearch).toBeInTheDocument();
});
