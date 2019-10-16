import actionTypes from '../actions/actionTypes'

let isLogin = Boolean(window.localStorage.getItem("user") || window.sessionStorage.getItem("user"))
const userInfo = JSON.parse(window.localStorage.getItem("user")) || JSON.parse(window.sessionStorage.getItem("user"))
const initState = {
    ...userInfo,
    isLogin,
    isLoading: false,
}

export default( state = initState, action ) => {
    switch(action.type){
        case actionTypes.START_LOGIN:
            return{
                ...state,
                isLoading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload.userInfo,
                isLogin: true,
                isLoading: false
            } 
        case actionTypes.LOGIN_FAILED:
            return {
                id: "",
                email: "",
                nickname: "",
                isLogin: false,
                isLoading: false
            }
        case actionTypes.START_REGISTER:
            return{
                ...state,
                isLoading: true
            } 
        case actionTypes.REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload.userInfo,
                isLogin: true,
                isLoading: false
            }    
        case actionTypes.REGISTER_FAILED:{
            return{
                ...state,
                isLoading: false
            }
        }    
        default:
            return state
    }
}