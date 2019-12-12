import React, { Component } from 'react';
import './App.sass';
import Home from './page/home/home'

class App extends Component {
  
  state = {
    userAuthorized: false
  }

  checkValidFormAut = (e) => {
    let formAutEmail = document.getElementById('formAutEmail');
    let formAutPassword = document.getElementById('formAutPassword');

    if(formAutEmail.value.length > 0 && formAutPassword.value.length >= 5) {
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
