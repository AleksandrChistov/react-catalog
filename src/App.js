import React, { Component } from 'react';
import './App.sass';
import Home from './page/home/home'

class App extends Component {
  
  state = {
    userAuthorized: false
  }

  checkValidFormAut = (e) => {
    var form = document.getElementById('formAut');
    var isValidForm = form.checkValidity();

    if(isValidForm) {
      e.preventDefault();
      this.setState(() => {
        return { userAuthorized: true }
      });
    }
  }

  render() {
    return (
      <Home checkValidFormAut={this.checkValidFormAut}
      userAuthorized={this.state.userAuthorized}/>
    );
  }
}

export default App;
