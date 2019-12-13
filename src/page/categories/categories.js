import React from 'react';
import './categories.sass';
import FormAut from '../../components/form-aut/form-aut'

const CategoriesPage = props => (
  <React.Fragment>
    <div className="container">
      {/* {
        props.showModalEditCategories
          ? <Categories products={props.products} id={props.showModalEditProduct}
            editProduct={props.editProduct} categories={props.categories} 
            checkValidFormEditProduct={props.checkValidFormEditProduct} />
          : null
      } */}
      {
        props.userAuthorized 
          ?  <div className="product-title-wrap">
              <h1 className="products-title">Список категорий</h1>
              <button onClick={() => props.createProduct()} 
              className="btn-add-product">Добавить категорию</button>
            </div>
          : <React.Fragment>
              <p className="form-title">Авторизуйтесь на сайте, 
                чтобы начать им пользоваться<br/> (введите любые логин и пароль).</p>
              <FormAut checkValidFormAut={props.checkValidFormAut} />
            </React.Fragment>
      }
    </div>
  </React.Fragment>
)

export default CategoriesPage;