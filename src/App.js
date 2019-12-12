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

  editProduct = (id) => {
    this.setState({showModalEditProduct: id});
  }

  checkValidFormEditProduct = (e) => {
    e.preventDefault();

    const title = document.getElementById('editProductTitle');
    
    if(title.value.length < 5 || title.value.length > 40) {
      title.classList.add('edit-product_input-invalid');
      return false;
    } else {
      title.classList.remove('edit-product_input-invalid');
    }

    const price = document.getElementById('editProductPrice');

    if(price.value <= 0) {
      price.classList.add('edit-product_input-invalid');
      return false;
    } else {
      price.classList.remove('edit-product_input-invalid');
    }

    const date = document.getElementById('editProductExpDate');

    let d = date.value.split('.').reverse().join("-");

    if(isNaN(Date.parse(d))) {
      date.classList.add('edit-product_input-invalid');
      return false;
    } else {
      date.classList.remove('edit-product_input-invalid');
    }

    console.log('Все ОК!');
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
      editProduct={this.editProduct} showModalEditProduct={this.state.showModalEditProduct}
      checkValidFormEditProduct={this.checkValidFormEditProduct}
      categories={this.state.categories}/>
    );
  }
}

export default App;
