import * as actionType from '../actions/AuthAction'

const initialState = {
    token: null,
    userId:null,
    error:null,
    isLoading:false
}


const AuthReducer = (state=initialState, action)=>{
    switch(action.type){
        case actionType.AUTH_START :return authStart(state)
        case actionType.AUTH_SUCCESS :return authSuccess(state, action)
        case actionType.AUTH_FAIL :return authFail(state, action)
        case actionType.LOGOUT : return logout()

        default:return state
    }
}

const authStart = (state)=>{
    return {
        ...state,
        isLoading:true
    }
}

const authSuccess = (state, action)=>{
    return {
        error:null,
        isLoading:false,
        token:action.token,
        userId:action.userId

    }
}

const authFail = (state, action)=>{
    return {
        token:null,
        userId:null,
        isLoading:false,
        error:action.error
    }
}

const logout = ()=>{
    return {
        token:null,
        userId:null,
        isLoading:false,
        error:null
    }
}

export default AuthReducer