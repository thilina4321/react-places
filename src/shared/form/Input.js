import React, { useEffect, useReducer } from 'react'
import classes from './Input.module.css'
import {validate} from '../validators/validator'

const reducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE':return {
            ...state,
            value:action.value,
            isValid:validate(action.value, action.validators)
        }
        case 'TOUCH':return {
            ...state,
            isTouched:true
        }

        default:return state
    }
}

const Input = (props) => {

    
    
    const [inputState, dispatch] = useReducer(reducer, {
        value:'',
        isValid:false,
        isTouched:false
    })
    const {validate} = props
    const {value, isValid} = inputState

    useEffect(()=>{
        validate(value, isValid)
    }, [validate, value, isValid])

    const changeHandler = (event)=>{
        dispatch({
            type:'CHANGE',
            value:event.target.value,
            validators:props.validators
        })
    }

    const onTouchHandler = ()=>{
        dispatch({
            type:"TOUCH"
        })
    }

    const element = props.type === 'textarea' ? (
    <textarea 
    className={props.className}
    onBlur={onTouchHandler}
    value={inputState.value}
    id={props.id} rows={props.rows || 3}/>) :

    <input

    onBlur={onTouchHandler}
    onChange={changeHandler}
    value={inputState.value}
     id={props.id} placeholder={props.placeholder}
      className={props.className}/>



     
     return (
         <div className={`${classes.input}` }>
         <label> {props.label} </label>
         {element}
         {!inputState.isValid && inputState.isTouched && <p style={{margin:0}} className={classes.error}> {props.error} </p>}
        </div>
    )
}

export default Input
