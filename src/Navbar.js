import {Navbar, Container, Nav} from 'react-bootstrap'
const Navigation = () => {
    return ( 
       <Navbar bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand href="#">Prelim</Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link className="mx-3" href="#">Home</Nav.Link>
                    <Nav.Link className="mx-3" href="#">Visitors</Nav.Link>
                    <Nav.Link className="mx-3" href="#">About Us</Nav.Link>
                </Nav>
            </Container>
       </Navbar> 
    );
}
 
export default Navigation;