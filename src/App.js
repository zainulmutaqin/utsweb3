import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tema : 'lightTheme',
      backgroundColor : 'Grey'
    }
  } 
  clicked = () => {
    if(this.state.tema === 'darkTheme'){
      document.body.style.backgroundColor = 'White'
      this.setState(
        {
          tema : 'lightTheme',
          backgroundColor : 'White'
        }
      );
    } else{
      document.body.style.backgroundColor = 'Grey'
      this.setState(
        {
          tema : 'darkTheme',
          backgroundColor : 'Grey'
        }
      );
    }
    
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.tema}</h1>
          <button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={this.clicked}>Ganti</button>
      </div>
    );
  }
}

export default App;
