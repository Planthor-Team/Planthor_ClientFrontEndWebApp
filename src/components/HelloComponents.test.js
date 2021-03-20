import { render, screen } from '@testing-library/react';
import HelloComponent from './HelloComponents';
import React from 'react';


test('renders learn react link', () => {
    render(<HelloComponent />);
    // screen.debug();
    const linkElement = screen.getByText(/Project../);
    expect(linkElement).toBeInTheDocument();
});