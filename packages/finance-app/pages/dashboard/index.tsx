// import { Container } from '../../components/layout/index.styled';
import { Container, NavbarWrapper } from '../../components/layout/dashboard.styled';
import Navbar from '../../components/common/navbar';

const Dashboard = () => {
    return (
        <Container>
            <NavbarWrapper>
                <Navbar position='static'/>
            </NavbarWrapper>
        </Container>
    )
}

export default Dashboard;