import React from 'react';
import './categories.sass';
import FormAut from '../../components/form-aut/form-aut'
import CategoriesList from '../../components/categories-list/categories-list'
import ModalCategory from '../../components/modal-category/modal-category'

const CategoriesPage = props => (
  <React.Fragment>
    <div className="container">
      {
        props.showModalEditCategory
          ? <ModalCategory categories={props.categories}
            showModalEditCategory={props.showModalEditCategory}
            editCategory={props.editCategory} 
            checkValidFormEditCategory={props.checkValidFormEditCategory}/>
          : null
      }
      {
        props.userAuthorized 
          ? <React.Fragment>
              <div className="product-title-wrap categories-title-wrap">
                {
                  props.categories.length
                    ? <h1 className="products-title categories-title">Список категорий</h1>
                    : null
                }
                <button onClick={props.createCategory} 
                className="btn-add-product">Добавить категорию</button>
              </div>
              <div className="categories-wrap"> 
                <CategoriesList categories={props.categories} editCategory={props.editCategory}
                deleteCategory={props.deleteCategory} categoriesDeleteError={props.categoriesDeleteError}/>
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

export default CategoriesPage;