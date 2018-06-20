import React, { Component } from 'react';
import './App.css';
import MyPDViewer from '../src/Components/pdf-infinite';

class App extends Component {
  render() {
    return (
      <div>
        <p style={{ fontSize: '35px', color: 'red', justifyContent: 'center', fontWeight: 'bold', display: 'flex'}}> Welcome to PDF viewer</p>  
        <MyPDViewer />
      </div>
    );
  }
}

export default App;
