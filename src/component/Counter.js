import React from 'react'
import { connect } from 'react-redux'

import {increment, decrement, incrementIfIsOdd} from '../Actions'

const Counter = ({count,increment,decrement,incrementIfIsOdd}) =>{
        return(
            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => increment(10)}>+</button>
                {' '}
                <button onClick={() => decrement(9)}>-</button>
                {' '}
                <button onClick={() => incrementIfIsOdd(50)}>Inc If is ODD</button>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
        incrementIfIsOdd: (value) => dispatch(incrementIfIsOdd(value))
    }
}
 
export default connect(mapStateToProps, 
                       mapDispatchToProps)(Counter)