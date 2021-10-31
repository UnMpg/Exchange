import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavbarComp from './components/NavbarComp';
import NavbarCom from './components/NavbarCom';
import './index.css';
import ExRate from './components/ExRate';
import DataTable from './components/apiExchange/DataTable';
import Page1 from './components/Page1';

// function App() {
//   return (
//     <div className="bg">
//       <NavbarCom />
//       <Page1 />
//       <ExRate />
      

//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="bg">
      <NavbarCom />
      <Page1 />
      <ExRate />
      

    </div>
    );
  }
}

export default App;
