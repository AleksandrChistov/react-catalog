import React from 'react';
import './form-aut.sass';

const FormAut = () => (
  <form className="form-aut" action="#" method="get">
    <input className="form-aut__input" type="email" name="email" placeholder="Ваш email" required/>
    <input className="form-aut__input" type="password" name="password" placeholder="Ваш пароль" required/>
    <button className="btn form-aut__btn" type="submit">Войти</button>
  </form>
)

export default FormAut;