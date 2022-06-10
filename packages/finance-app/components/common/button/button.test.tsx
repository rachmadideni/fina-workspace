import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

const buttonProps = {
    onClick: jest.fn()
}

describe('render button', () => {
    it('should render button with the correct title', () => {
        render(<Button>sign up</Button>)
        const button = screen.getByText(/sign up/i)
        expect(button).toBeInTheDocument();
    })

    it('should respond to onclick handler', () => {
        const { getByRole } = render(<Button {...buttonProps} />)
        const button = getByRole('button', { name:'button' });
        fireEvent.click(button);
        expect(buttonProps.onClick).toHaveBeenCalledTimes(1);
    })
})