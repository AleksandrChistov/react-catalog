import React from 'react';
import './modal-category.sass';

const ModalCategory = props => {
  
  return (
    <div className="edit-product-wrap">
      <div className="edit-product">
        <h3 className="category-edit__main-title">Редактирование категории</h3>
        <form action="#" method="post" id="formEditCategory" 
        className="edit-product-form edit-category-form">
          <label htmlFor="editProductTitle" className="edit-product__title-label">
            <input type="text" id="editCategoryText" className="edit-product__title" 
            minLength="3" maxLength="30" placeholder="От 3 до 25 символов" 
            defaultValue={props.categories[props.showModalEditCategory - 1]}/>
          </label>
          <div className="edit-product-wrapper-btn product-wrapper-btn">
            <button type="submit" className="btn product__btn-edit edit-product__btn-save"
            onClick={(e) => props.checkValidFormEditCategory(e, 
            props.categories[props.showModalEditCategory - 1], props.showModalEditCategory - 1)}
            >Сохранить</button>
            <button onClick={() => props.editCategory(0)}
            className="btn product__btn-delete edit-product__btn-cancel">Отмена</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalCategory;