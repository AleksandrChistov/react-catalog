import React from 'react';
import './home.sass';
import Header from '../../components/header/header'
import FormAut from '../../components/form-aut/form-aut'

const Home = () => (
  <React.Fragment>
    <Header />
    <div className="container">
      <p className="form-title">Авторизуйтесь на сайте, 
      чтобы начать им пользоваться<br/> (введите любые логин и пароль).</p>
      <FormAut />
    </div>
  </React.Fragment>
)

export default Home;