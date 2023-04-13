import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

it('Is emoji copied', () => {
    render(<App/>);
    const copied = screen.getByText('Smile');
    fireEvent.click(copied);
    expect(copied.parentElement.getAttribute('data-clipboard-text')).toMatch('😄');
})

