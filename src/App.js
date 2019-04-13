import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from '../src/UI/Modal/Modal'

class App extends Component {
  state={
    modalToggle: false
  }

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      modalToggle: !this.state.modalToggle
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            onClick={this.modalHandler}
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Modal show={this.state.modalToggle} modalClosed={this.modalHandler}>
            <div
                style={{color:'black'}}
            >
              The Best Has Happened To ME
            </div>
          </Modal>
        </header>
      </div>
    );
  }
}

export default App;
