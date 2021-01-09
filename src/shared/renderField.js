import React from 'react'
import classes from '../places/NewPlace/NewPlace.module.css'

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div style={{margin:'10px'}}>
      <label>{label}</label>
      <div>
        <input className={classes.input} {...input} placeholder={label} type={type} />
        {touched && error && <span style={{fontSize:'10px', color:'red'}}>{error}</span>}
      </div>
    </div>
  );

  export default renderField

