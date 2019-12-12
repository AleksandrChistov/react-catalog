import React from 'react';
import './home.sass';
import Header from '../../components/header/header'
import FormAut from '../../components/form-aut/form-aut'
import Products from '../../components/products/products'

const Home = props => (
  <React.Fragment>
    <Header />
      <div className="container">
        {
          props.userAuthorized 
            ? <React.Fragment>
                <h1 className="products-title">Наши товары</h1> 
                <div className="products-wrap"> 
                  <Products products={props.products}/>
                </div>
              </React.Fragment> 
            : <React.Fragment>
                <p className="form-title">Авторизуйтесь на сайте, 
                  чтобы начать им пользоваться<br/> (введите любые логин и пароль).</p>
                <FormAut checkValidFormAut={props.checkValidFormAut} />
              </React.Fragment>
        }
      </div>
  </React.Fragment>
)

export default Home;