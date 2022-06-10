import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('render a header', () => {
    
    it('should render the correct title', () => {
        render(<Header>sign up</Header>)
        const title = screen.getByText(/sign up/i);
        expect(title).toBeInTheDocument();
    });
    
})