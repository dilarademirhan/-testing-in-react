import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

it('Is filtering working', () => {
    render(<App/>);
    const emojiName = 'Clock10';
    const textBox = screen.getByRole('textbox');
    fireEvent.change(textBox, { target: { value: emojiName } });
    expect(screen.getByText(emojiName)).toBeInTheDocument;
});