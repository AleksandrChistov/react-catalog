import React from 'react';
import './modal-product.sass';

const ModalProduct = props => {
  const {products, id, editProduct, checkValidFormEditProduct} = props;
  return (
    <div className="edit-product-wrap">
      <div className="edit-product" key={products[id - 1].id}>

        <h3 className="edit-product__main-title">Редактирование товара</h3>

        <form action="#" method="post" id="formEditProduct" className="edit-product-form">

          <label htmlFor="editProductTitle" className="edit-product__title-label">
            <span className="edit-product__text">Название товара: </span>
            <input type="text" id="editProductTitle" className="edit-product__title" 
            minLength="5" maxLength="40" defaultValue={products[id - 1].name}/>
          </label>

          <label htmlFor="editProductPrice" className="edit-product__price-label">
            <span className="edit-product__text">Цена (руб): </span>
            <input type="text" id="editProductPrice" className="edit-product__price" 
            defaultValue={products[id - 1].price}/>
          </label>

          <label htmlFor="editProductExpDate" className="edit-product__exp-date-label">
            <span className="edit-product__text">Годен до: </span>
            <input type="text" id="editProductExpDate" className="edit-product__exp-date" 
            defaultValue={products[id - 1].expDate}/>
          </label>

          <label htmlFor="editProductCategory" className="edit-product__category-label">
            <span className="edit-product__text">Категория: </span>
            <input type="text" id="editProductCategory" className="edit-product__category" 
            defaultValue={products[id - 1].category}/>
          </label>

          <div className="edit-product-wrapper-btn product-wrapper-btn">
            <button type="submit" className="btn product__btn-edit edit-product__btn-save"
            onClick={(e) => checkValidFormEditProduct(e)}>Сохранить</button>
            <button onClick={() => editProduct(0)} 
            className="btn product__btn-delete edit-product__btn-cancel">Отмена</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default ModalProduct;