import React, { Component } from 'react';
import './data.json';

class Cari extends Component {
    constructor(props) {
        super(props);
        this.state = { suggestions:[] };
        this.search = this.search.bind(this);
    }

    search(event) {
        let input = event.target.value;
        //console.log('event.target.value: ' + input);
        console.log('this.searchResults: ' + json);
        let matches = [], i;
         
        if (input.length > 1) {
            for (i = 0; i < json.length; i++) {
                if (json[i].match(input)) {
                    matches.push(json[i]);
                }
            }
        }
         
        this.setState({ suggestions: matches });
    }

    render() {

        return (
            <div>
            <h2>ReactJS - Autocomplete</h2>
                    <label>Search Here</label>  <input onKeyUp={this.search.bind(this)}/> 
                    <React.Fragment>
                        <ul style={{listStyleType:'none'}}>
                            {this.state.suggestions.map(res => (
                                <li key={res}>
                                    {res}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
            </div>
        );
    }
}

export default Cari;