import React, { Component } from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import home from './home';
import rate from './rate';

class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="dark" variant ={"dark"} expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Money Exchange</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>sds</div>
                            <Nav.Link as ={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/rate"}>Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </div>
            <div>
            <Switch>
            <Route path="/about">

                </Route>
                <Route path="/users">
                </Route>
                <Route path="/">
                </Route>
            </Switch>
            </div>
            </Router>
        );
    }
}

export default NavbarComp;