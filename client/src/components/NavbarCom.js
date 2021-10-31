import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//import Home from './Home';
import Page1 from './Page1';
//import rate from './Rate';
import ExRate from './ExRate';
import Home from './Home';


class NavbarCom extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="light" variant={"light"} expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to={"/"}>MONEY EXCHANGE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >   
                            
                            {/* <Nav.Link as={Link} to={"/page1"}>Exchange</Nav.Link>
                            <Nav.Link as={Link} to={"#exchange"}>Exchange Rate</Nav.Link>
                             */}
                        </Nav>
                       
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
            <Switch>
                <Route path="/page1">
                <Page1 />
                </Route>
                <Route path="/page1">
                    <Page1 />
                </Route>
                <Route path="#exchange">
                    <ExRate /> 
                </Route>
                
            </Switch>
            </div>
        </Router>
        );
    }
}

export default NavbarCom;
