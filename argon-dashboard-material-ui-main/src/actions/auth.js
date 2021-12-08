import  * as actionType from "./types";
  
import axios from "axios";  

  export const authStart = () =>{
    return {
        type:actionType.AUTH_START
    }
}  
export const authSuccess = (token) =>{
    return {
        type : actionType.AUTH_SUCCESS,
        token : token
    }
}  
export const authFail = ()=>{
    return {
        type:actionType.AUTH_FAIL,
    }
}
export const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userName')
    return {
        type:actionType.AUTH_LOGOUT
    }
}  
export const checkAuthTime = expirationTime =>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime * 1000)
    }
  }
  
  export const errorMessage= (msg, status)=>{
    return{
        type:actionType.ERROR_LEAD,
        payload: {msg,status}
    }
}

  export const authLogin = (email, password) =>{
    return dispatch => {
        dispatch(authStart());
        axios.post('/token-auth/',{
            headers: {
            'Content-Type': 'application/json'
          },
        email:email,
        password:password})
        .then(res=>{
            const token = res.data.token;
            const expirationDate = new Date(new Date().getTime()+3600 * 1000)
            localStorage.setItem('token',token)
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem('userName',res.data.user.username)
            dispatch(authSuccess(token))
            dispatch(checkAuthTime(3600))
        })
        .catch(err =>{
            dispatch(authFail())
            dispatch(errorMessage(err.response.data, err.response.status))
        })
    }
}
 