const initialState = {
    count:0
}

const anotherReducer = (state=initialState, action) => {
    if(action.type === 'ADICIONAR'){
        return {...state, count: state.count + 1} 
    }

    return state
}

export default anotherReducer