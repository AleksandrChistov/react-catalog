import React from 'react';
import './products.sass';

const Products = props => (
  <React.Fragment>
    {
      props.products.map(product => {
        return ( 
          <div className="product" key={product.id}>
            <h3 className="product__title">{product.name}</h3>
            <div className="product__price"><b>Цена:</b> {product.price} руб.</div>
            <div className="product__exp-date"><b>Годен до:</b> {product.expDate}</div>
            <div className="product__category"><b>Категория:</b> {product.category}</div>
            <div className="product-wrapper-btn">
              <button onClick={() => props.editProduct(product.id)} 
                className="btn product__btn-edit">Редактировать</button>
              <button onClick={() => props.deleteProduct(product.id)} 
                className="btn product__btn-delete">Удалить</button>
            </div>
          </div>
        )
      })
    }
  </React.Fragment>
)

export default Products;