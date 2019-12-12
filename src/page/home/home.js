import React from 'react';
import './home.sass';
import Header from '../../components/header/header'
import FormAut from '../../components/form-aut/form-aut'

const Home = props => (
  <React.Fragment>
    <Header />
    {
      props.userAuthorized 
        ? null
        : <div className="container">
            <p className="form-title">Авторизуйтесь на сайте, 
            чтобы начать им пользоваться<br/> (введите любые логин и пароль).</p>
            <FormAut checkValidFormAut={props.checkValidFormAut} />
          </div>
    }
  </React.Fragment>
)

export default Home;