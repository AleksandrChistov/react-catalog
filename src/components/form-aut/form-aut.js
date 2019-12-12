import React from 'react';
import './form-aut.sass';

const FormAut = props => (
  <form className="form-aut" action="#" method="get">
    <input className="form-aut__input" type="email" id="formAutEmail" 
    name="email" placeholder="Ваш email" required/>
    <input className="form-aut__input" type="password" id="formAutPassword" 
    name="password" placeholder="Ваш пароль (не менее 5 символов)" 
    minLength="5" required/>
    <button onClick={props.checkValidFormAut} className="btn form-aut__btn" 
    type="submit">Войти</button>
  </form>
)

export default FormAut;