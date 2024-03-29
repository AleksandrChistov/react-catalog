import React from 'react';
import './home.sass';
import FormAut from '../../components/form-aut/form-aut'
import Products from '../../components/products/products'
import ModalProduct from '../../components/modal-product/modal-product'

const Home = props => (
  <React.Fragment>
    <div className="container">
      {
        props.showModalEditProduct
          ? <ModalProduct products={props.products} id={props.showModalEditProduct}
            editProduct={props.editProduct} categories={props.categories} 
            checkValidFormEditProduct={props.checkValidFormEditProduct} />
          : null
      }
      {
        props.userAuthorized 
          ? <React.Fragment>
              <div className="product-title-wrap">
              {
                props.products.length
                  ? <h1 className="products-title">Наши товары</h1>
                  : null
              }
                <button onClick={() => props.createProduct()} 
                className="btn-add-product">Добавить товар</button>
              </div>
              <div className="products-wrap"> 
                <Products products={props.products} editProduct={props.editProduct}
                deleteProduct={props.deleteProduct}/>
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