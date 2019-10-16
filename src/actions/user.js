import actionTypes from './actionTypes'
import { loginRequest } from '../requests'
import { message } from 'antd'



const startLogin = () =>{
    return{
        type: actionTypes.START_LOGIN
    }
}


const loginSuccess = (userInfo)=>{
    return{
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            userInfo
        }
    }
}

const loginFailed = () => {
    message.error("Wrong username or password!", 2)
    window.localStorage.removeItem("user")
    window.sessionStorage.removeItem("user")
    return{
        type: actionTypes.LOGIN_FAILED
    }
}

export const logout =() => {
    window.localStorage.removeItem("user")
    window.sessionStorage.removeItem("user")
    return{
        type: actionTypes.LOGIN_FAILED
    }
}


export const login = (values) =>{
    return dispatch =>{
        dispatch(startLogin())
        const userInfo = JSON.stringify(values)
        loginRequest(userInfo)
            .then(resp => {
                // console.log(userInfo)
                if(resp.data){
                    // console.log(values.remember)
                    if(values.remember === true){
                        window.localStorage.setItem("user", JSON.stringify(resp.data))
                    }else{
                        window.sessionStorage.setItem("user", JSON.stringify(resp.data))
                    }
                    dispatch(loginSuccess(resp.data))
                }else{
                    dispatch(loginFailed())
                }
            })
    }
}