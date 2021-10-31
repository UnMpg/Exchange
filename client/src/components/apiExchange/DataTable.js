import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
//import { response } from 'express';

class DataTable extends Component {
    constructor (){
        super();
        this.state={
            exchange:{}
        };
    }

    componentDidMount(){

        var options = {
        method: 'GET',
        url: 'https://exchange-rate9.p.rapidapi.com/latest',
        params: {base: 'USD'},
        headers: {
            'x-rapidapi-host': 'exchange-rate9.p.rapidapi.com',
            'x-rapidapi-key': '4aecf0f073msh8b305366d8f411dp1005c6jsn3164bc363a96'
        }
        };

        // var self = this;
        axios.request(options).then(function (response) {
            // console.log(response.data);
            this.setState({exchange: response.data});
        }.bind(this)).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        let base = this.state.exchange.base;
        // let rates = (rates == undefined) ? {} : this.state.exchange.rates;
        let rates = {};

        if(this.state.exchange.rates != undefined) rates = this.state.exchange.rates;

        // console.log(rates);
        // console.log(rates.IDR)
        const lee = Object.keys(rates)
        return (
  
            <div>
            <Table striped bordered hover >
                             
                             <thead>
                                <tr>
                                <th>Base</th>
                                <th>Currency</th>
                                <th>Exghange</th>
                                </tr>
                            </thead>
                            <tbody>
                <tr> <td> Base: {base} </td><td></td><td></td></tr>
                {lee.map(key => <tr><td>USD </td><td>{key}</td><td> {rates[key]}</td>   </tr>)}
                </tbody>
                </Table>
                
            </div>
        );
    }
}

export default DataTable;