
import './customers.css';
import { Component } from 'react';

class Customers extends Component{
    constructor (){
        super();
        this.state={
            customers:[]
        };
    }


    componentDidMount(){
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers},()=> console.log('Customer fetsc..',customers))); 
    }

    render(){
        return(
            <div>
                <h2> Customer</h2>
                <ul>
                    {this.state.customers.map(customers => 
                    <li key = {customers.id}>{customers.fristname} {customers.lastname} </li>)}
                </ul>
            </div>
        )
    }
}


export default Customers;
