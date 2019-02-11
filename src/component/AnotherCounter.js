import React from 'react'
import { connect } from 'react-redux'

import {adicionar} from '../Actions'

const AnotherCounter = ({count,adicionar}) =>{
        return(
            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => adicionar()}>+</button>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        count: state.anotherReducer.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        adicionar: () => dispatch(adicionar())
    }
}
 
export default connect(mapStateToProps, 
                       mapDispatchToProps)(AnotherCounter)