import React from 'react';
import './categories-list.sass';

const CategoriesList = props => (
  <React.Fragment>
    {
      props.products.map((product, index) => {
        return ( 
          <div className="product categories" key={index + 1}>
            <h3 className="product__title categories__title">{product}</h3>
            <div className="product-wrapper-btn categories-wrapper-btn">
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

export default CategoriesList;