import React, { Component } from 'react';
import './App.sass';
import Home from './page/home/home'

class App extends Component {
  
  state = {
    products: [
      {name: 'Товар №1', price: 1350, expDate: '13.12.2021', category: 'Валенки', id: 1}, 
      {name: 'Товар №2', price: 1150, expDate: '22.06.2021', category: 'Угги', id: 2},
      {name: 'Товар №3', price: 4950, expDate: '01.12.2020', category: 'Кроссовки', id: 3},
      {name: 'Товар №4', price: 950, expDate: '15.06.2020', category: 'Сандалии', id: 4},
      {name: 'Товар №5', price: 2150, expDate: '13.10.2020', category: 'Топсайдеры', id: 5},
    ],
    categories: ['Ботинки и полуботинки', 'Валенки', 'Галоши', 'Бутсы', 'Кеды', 
                'Кроссовки', 'Сникеры', 'Чешки', 'Шиповки', 'Мокасины', 'Сабо', 
                'Сандалии', 'Сапоги и унты', 'Слипоны', 'Тапочки', 'Топсайдеры', 
                'Туфли и лоферы', 'Угги'],
    userAuthorized: true,
    showModalEditProduct: 0
  }

  createExpDate = (date) => {
    console.log(date);
  }

  editProduct = (id) => {
    console.log(id);
    this.setState({showModalEditProduct: id});
  }

  checkValidFormAut = (e) => {
    var form = document.getElementById('formAut');
    var isValidForm = form.checkValidity();

    if(isValidForm) {
      e.preventDefault();
      this.setState({ userAuthorized: true });
    }
  }

  render() {
    return (
      <Home checkValidFormAut={this.checkValidFormAut}
      userAuthorized={this.state.userAuthorized} products={this.state.products}
      editProduct={this.editProduct} showModalEditProduct={this.state.showModalEditProduct}/>
    );
  }
}

export default App;
