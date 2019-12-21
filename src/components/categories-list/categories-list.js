import React from 'react';
import './categories-list.sass';

const CategoriesList = props => {
  
  let classCategory;
  let deleteErrorText;

  return (
    <React.Fragment>
      {
        props.categories.map((category, index) => {
          
          if (props.categoriesDeleteError === index) {
            classCategory = 'product categories categories_delete-error';
            deleteErrorText = <div className="categories__text-delete-error">
                                Невозможно удалить категорию! Она уже используется.
                              </div>
          } else {
            classCategory = 'product categories';
            deleteErrorText = null;
          }

          return ( 
            <div className={classCategory} key={index + 1}>
              <h3 className="product__title categories__title">{category}</h3>
              <div className="product-wrapper-btn categories-wrapper-btn">
                <button onClick={() => props.editCategory(index + 1)} 
                  className="btn product__btn-edit">Редактировать</button>
                <button onClick={() => props.deleteCategory(index)} 
                  className="btn product__btn-delete">Удалить</button>
              </div>
              {deleteErrorText}
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default CategoriesList;