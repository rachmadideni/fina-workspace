import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import TextField from '.';

describe('render textfield', () => {
    it('should render a textfield', () => {
        const { baseElement } = render(<TextField />)
        expect(baseElement).toBeInTheDocument();        
    })
    
    it('should render a textfield password with default value', () => {
        const { getByTestId } = render(<TextField type="password" inputProps={{ "data-testid": "input-password" }} />)
        const textfield = getByTestId('input-password') as HTMLInputElement;        
        expect(textfield.value).toBe("");        
    })

    it('textfield password should respond to user typing', () => {
        const { getByTestId } = render(<TextField type="password" inputProps={{ "data-testid": "input-password" }} />)
        const textfield = getByTestId('input-password') as HTMLInputElement;
        fireEvent.change(textfield, {
            target: {
                value: 'some password'
            }
        })

        expect(textfield.value).toBe('some password')
    })
})