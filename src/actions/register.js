import actionTypes from './actionTypes'
import { registerRequest } from '../requests'
import { message } from 'antd'


const startRegister = () =>{
    return{
        type: actionTypes.START_REGISTER
    }
}

const registerSuccess = (userInfo) => {
    message.success(`Congratulation ${userInfo.nickname}！You have registered successfully`)
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: {
            userInfo
        }
    }
}

const registerFailed = () => {
    message.error("Oops! This email address has been already registered!", 2)
    return{
        type: actionTypes.REGISTER_FAILED 
    }
}

export const register = (userInfo) =>{
    return dispatch =>{
        dispatch(startRegister())
        const requestBody = JSON.stringify(userInfo)
        registerRequest(requestBody)
            .then(resp => {
                if(resp.data){
                    window.sessionStorage.setItem("user", JSON.stringify(resp.data))
                    dispatch(registerSuccess(resp.data))
                }else{
                    dispatch(registerFailed())
                }
            })
    }        
}