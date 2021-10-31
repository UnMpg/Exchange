
import React, { Component } from 'react';
import './data.json';

import axios from 'axios';

class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            moneyType: {},
            convertFrom: "",
            convertFromValue: 0,
            convertTo: "",
            convertToValue: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);

        this.handleChangeValueFrom = this.handleChangeValueFrom.bind(this);
        this.getAllCurency();
    }

    getAllCurency(){
        var options = {
            method: 'GET',
            url: 'https://exchange-rate9.p.rapidapi.com/symbols',
            headers: {
              'x-rapidapi-host': 'exchange-rate9.p.rapidapi.com',
              'x-rapidapi-key': '4aecf0f073msh8b305366d8f411dp1005c6jsn3164bc363a96'
            }
          };

        axios.request(options).then(function (response) {
            this.setState({moneyType: response.data.symbols});
        }.bind(this)).catch(function (error) {
            console.error(error);
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Sumbited");

        console.log(this.state.convertFrom);
        console.log(this.state.convertFromValue);

        var options = {
            method: 'GET',
            url: 'https://exchange-rate9.p.rapidapi.com/convert',
            params: {from: this.state.convertFrom, to: this.state.convertTo},
            headers: {
              'x-rapidapi-host': 'exchange-rate9.p.rapidapi.com',
              'x-rapidapi-key': '4aecf0f073msh8b305366d8f411dp1005c6jsn3164bc363a96'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.result);

              let result = Number(this.state.convertFromValue) * Number(response.data.result);
              this.setState({convertToValue: result});
          }.bind(this)).catch(function (error) {
              console.error(error);
          });
    }

    handleChangeTo(event){
        this.setState({convertTo: event.target.value});
        console.log(this.state.convertTo);
    }

    handleChangeFrom(event){
        this.setState({convertFrom: event.target.value})
        console.log(this.state.convertFrom);
    }

    handleChangeValueFrom(event){
        this.setState({convertFromValue: event.target.value});
    }

    render() {  
        let moneyType = {};
        if(this.state.moneyType != undefined) moneyType = this.state.moneyType;
        const moneyTypeKey = Object.keys(moneyType);

        return (
            <div className='showcase-overlay'>
                <form id="signup" onSubmit={this.handleSubmit}>
                    <div className="header">
                        <h3>MONEY EXCHANGE</h3>
                        <div className="sep"></div>
                    </div>
                    <div className="inputs">

                        {/* <input type="from" placeholder="e-mail" autofocus  id ="search"/> */}
                        <select name="curencyFrom" className="form-control" 
                            value={this.state.convertFrom} onChange={this.handleChangeFrom} onClick ={this.handleChangeFrom}>
                            {moneyTypeKey.map(key => <option value={key}>{key} - {moneyType[key].description}</option>)}
                        </select>
                        <br/>
                        <input type="number" placeholder="Current" className="form-control" 
                            value={this.state.convertFromValue}
                            onChange={this.handleChangeValueFrom}/>
                        <br/>
                        <div className="text-center text-black">CONVERT VALUE</div>
                        <br/>
                        <select name="curencyTo" className="form-control"
                            value={this.state.convertTo} onChange={this.handleChangeTo} onClick={this.handleChangeTo}>
                            {moneyTypeKey.map(key => <option value={key}>{key} - {moneyType[key].description}</option>)}
                        </select>
                        <br/>
                        <input type="number" placeholder="Result" className="form-control"
                            value={this.state.convertToValue}/>
                        <button id="submit" type="submit">CONVERT NOW</button>
                    </div>

                </form>
            </div>
        );
    }
}
// const search= document.getElementById('search');
// const marchList= document.getElementById('march-list');
// console.log("");

// const searchStates = async searchText => {
//     const res = await fetch('./data.json');
//     const states = await res.json(); 

//     console.log(states);

//     let matches =states.filter(state => {
//         const regex = new RegExp(`^${searchText}`,'gi');
//         return state.key(regex);
//     });

//     if(searchText.length === 0){
//         matches =[];
//         marchList.innerHTML='';
//     }
//     console.log(matches);
//     outputHtml(matches);
// };

// const outputHtml = matches => {
//     if(matches.length>0){
//          const html = matches.map(match => `<h3>${match.key}</h3>`).join('');

//         console.log(html);

//         marchList.innerHTML = html;
         
//     }

// }
// search.addEventListener('input',()=>searchStates(search.value));


export default Page1;