import {
    Container,
    SectionWrapper
} from '../../components/layout/index.styled'

const SigninPage = () => {
    return (
        <Container>
            <SectionWrapper>
                Left
            </SectionWrapper>
            <SectionWrapper bgColor="orange">
                Right
            </SectionWrapper>
        </Container>
    )
}

export default SigninPage;