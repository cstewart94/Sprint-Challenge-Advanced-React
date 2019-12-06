import React from 'react';
import './App.css';
import axios from 'axios';

import Players from './components/Players';
import Navbar from './components/Navbar.jsx';

const containerDiv = {
 display: 'flex',
 minWidth: '85vw',
 wrap: 'wrap',
 flexDirection: 'row',
 justifyContent: 'center',
 flexWrap: 'wrap'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log('Another error', error);
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <Navbar/>
        <div style={containerDiv}>
        <Players data={this.state.data} />
        </div>
      </div>
    )
  }
}

export default App;