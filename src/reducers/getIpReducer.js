const initialState = {
    data:[],
    isFetching:false,
    isError: false
}

const getIpReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_IP_REQUEST':
            return {
                data: [],
                isFetching:true,
                isError: false
            }
        
        case 'GET_IP_SUCCESS':
            return {
                data: action.data.origin,
                isFetching:false,
                isError: false
            }
        
        case 'GET_IP_ERROR':
            return {
                data:action.data,
                isFetching:false,
                isError: true
            }

        default:
            break
    }
    return state
}

export default getIpReducer