import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//redux
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import AuthReducer from './store/reducers/AuthReducer'
import thunk from 'redux-thunk'




const reducer = combineReducers({
    form:formReducer,
    auth:AuthReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
