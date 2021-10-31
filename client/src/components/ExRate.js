import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Table} from 'react-bootstrap';
import DataTable from './apiExchange/DataTable';



class ExRate extends Component {
    render() {
        return (
            <div>
                 <section className='exchange' id="exchange">
                     <Container>
                            <div className="judul">

                            <h2>Exchange Rates</h2>
                            </div>
                         
                         
                                <DataTable />
                                
                        
                        </Container>
                    </section>
            </div>
        );
    }
}

export default ExRate;