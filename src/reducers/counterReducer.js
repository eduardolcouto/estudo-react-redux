const initialState = {
    count: 0
}
const counterReducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count+action.value}
        
        case 'DECREMENT':
            return {...state, count: state.count-action.value}
        
        case 'INCREMENT_IF_IS_ODD':
            if(state.count%2 !== 0)
                return {...state, count: state.count+action.value}
        default:
            break
    }
    return state

}

export default counterReducer