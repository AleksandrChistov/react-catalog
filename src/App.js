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


  saveEditProduct = (name, price, expDate, category, id) => {
    let products = [...this.state.products];
    
    let newProducts = products.map(product => {
      if(product.id === id) {
        product = {name, price, expDate, category, id};
      }
      return product;
    });
    
    this.setState({products: newProducts, showModalEditProduct: 0});
  }

  deleteProduct = (id) => {
    let products = [...this.state.products];
    
    let newProducts = products.filter(product => product.id !== id);

    this.setState({products: newProducts});
  }


  editProduct = (id) => {
    this.setState({showModalEditProduct: id});
  }


  checkValidFormEditProduct = (e, id) => {
    e.preventDefault();

    const title = document.getElementById('editProductTitle');
    
    if(title.value.length < 5 || title.value.length > 40) {
      this.changeClassInput(title, 'add');
      return false;
    } else {
      this.changeClassInput(title, 'del');
    }

    const price = document.getElementById('editProductPrice');

    if(price.value > 0) {
      this.changeClassInput(price, 'del');
    } else {
      this.changeClassInput(price, 'add');
      return false;
    }

    const date = document.getElementById('editProductExpDate');

    let d = date.value.split('.').reverse().join("-");

    if(isNaN(Date.parse(d))) {
      this.changeClassInput(date, 'add');
      return false;
    } else {
      this.changeClassInput(date, 'del');
    }

    const category = document.getElementById('editProductCategory');

    console.log('Все ОК!');
    this.saveEditProduct(title.value, +price.value, date.value, category.value, id);
  }


  changeClassInput = (input, change) => {
    if (change === 'add') {
      input.classList.add('edit-product_input-invalid');
    } else {
      input.classList.remove('edit-product_input-invalid');
    }
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
      categories={this.state.categories} deleteProduct={this.deleteProduct}/>
    );
  }
}

export default App;
