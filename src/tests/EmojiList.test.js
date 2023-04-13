import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

beforeAll(() => {
    render(<App/>);
})
    
it("Is emoji list rendered successfully", () => {
    const emojis = screen.getAllByText("Click to copy emoji");
    expect(emojis.length).toEqual(20);
});