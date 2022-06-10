import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const Container = styled.div`
    display: flex;
    flex-grow:1;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`

interface ISectionProps {
    bgColor?: string;
}

export const SectionWrapper = styled.div<ISectionProps>`
    display: flex;
    flex:1;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${(props => props.bgColor ? `background-color: ${props.bgColor}` : '')}
`

export const FormStyled = styled(Stack)`    
    /* width:50%;     */
` 