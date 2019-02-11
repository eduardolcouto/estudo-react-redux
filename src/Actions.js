import axios from 'axios'

export const increment = (value) => {
     return {type:'INCREMENT', value: value}
 }

 export const decrement = (value) => {
    return {type:'DECREMENT', value:value}
}

export const incrementIfIsOdd = (value) => {
    return {type: 'INCREMENT_IF_IS_ODD', value:value}
}

export const adicionar = () =>{
    return {type:'ADICIONAR'}
}

export const GET_IP_REQUEST = () =>{
    return {type:'GET_IP_REQUEST'}
}
export const GET_IP_SUCCESS = (data) =>{
    return {type:'GET_IP_SUCCESS', data}
}
export const GET_IP_ERROR = () =>{
    return {type:'GET_IP_ERROR'}
}

export const getIp = () => {
    return dispatch => {
        dispatch(GET_IP_REQUEST())
        axios   
            .get('http://httpbin.org/ip')
            .then(({data})=> dispatch(GET_IP_SUCCESS(data)))
            .catch((data)=>dispatch(GET_IP_ERROR(data)))
    }
}

