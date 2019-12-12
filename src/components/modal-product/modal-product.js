import React from 'react';
import './modal-product.sass';

const ModalProduct = props => {
  const {products, id, editProduct} = props;
  return (
    <div className="edit-product-wrap">
      <div className="edit-product" key={products[id - 1].id}>
        <h3 className="edit-product__main-title">Редактирование товара</h3>
        <label htmlFor="editProductTitle" className="edit-product__title-label">
          <span className="edit-product__text">Название товара: </span>
          <input type="text" id="editProductTitle" className="edit-product__title" 
          defaultValue={products[id - 1].name}/>
        </label>

        <label htmlFor="editProductPrice" className="edit-product__price-label">
          <span className="edit-product__text">Цена: </span>
          <input type="text" id="editProductPrice" className="edit-product__price" 
          defaultValue={products[id - 1].price}/> 
          руб.
        </label>

        <label htmlFor="editProductExpDate" className="edit-product__exp-date-label">
          <span className="edit-product__text">Годен до: </span>
          <input type="text" id="editProductExpDate" className="edit-product__exp-date" 
          defaultValue={products[id - 1].expDate}/> 
          руб.
        </label>

        <label htmlFor="editProductCategory" className="edit-product__category-label">
          <span className="edit-product__text">Категория: </span>
          <input type="text" id="editProductCategory" className="edit-product__category" 
          defaultValue={products[id - 1].category}/> 
          руб.
        </label>

        <div className="edit-product-wrapper-btn product-wrapper-btn">
          <button className="btn product__btn-edit edit-product__btn-save">Сохранить</button>
          <button onClick={() => editProduct(0)} 
          className="btn product__btn-delete edit-product__btn-cancel">Отмена</button>
        </div>

      </div>
    </div>
  )
}

export default ModalProduct;