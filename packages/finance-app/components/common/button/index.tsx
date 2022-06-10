import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/Button';
import { ButtonProps } from '@mui/material';

const StyledButton = styled(ButtonBase)``    

const Button = (props: ButtonProps) => <StyledButton aria-label="button" role="button" {...props}>{props.children}</StyledButton>

export default Button;
