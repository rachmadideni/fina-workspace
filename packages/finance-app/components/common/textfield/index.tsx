import { styled } from '@mui/material/styles'
import { TextField as BaseTextField, TextFieldProps } from '@mui/material'

const StyledTextField = styled(BaseTextField)``

const TextField = (props: TextFieldProps) => <StyledTextField {...props} />
export default TextField;