import React, { Component } from 'react';
import {render} from 'react-dom';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import Chart from './components/Chart.js';

const NVE_API = "https://api01.nve.no/hydrology/forecast/avalanche/v4.0.0/api/AvalancheWarningByRegion/Simple/3032/1/2018-03-25/2018-03-30";


class App extends Component {
  constructor(props) {
          super(props)
          this.state = {
              results: [],
          };
      }

      componentDidMount() {
        fetch(NVE_API)
            .then(response => {
                if (response.ok) {
                    return  response.json()
                }
                else {
                    throw new Error ('something went wrong')
                }
            })
            .then(response => this.setState({
              results: response.map((x, index)=>{
                        return { x: index, y: x.DangerLevel};
                    })
                })
            )}

    render() {
        const {results} = this.state;

        return (
            <div className="App">
              <Chart data={results}/>
            </div>
        );
    }
}

export default App;
