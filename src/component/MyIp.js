import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getIp } from '../Actions'


class MyIp extends Component{

    getIp = () => {
        this.props.getIp()
    }

    render(){
        console.log(this.props.data)
        return (
            <div>
                <h3>My IP: <span>
                    { !this.props.isFetching &&
                        <span> {this.props.data} </span>
                    }
                    { this.props.isFetching &&
                        <span> Loading...... </span>
                    }
                    { this.props.isError &&
                        <span style={{color: 'red'}}> Erro ao buscar o IP </span>
                    }
                </span> 
                
                </h3>
                <button onClick={this.props.getIp}>Get My Ip</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.getIpReducer.data,
        isFetching: state.getIpReducer.isFetching,
        isError: state.getIpReducer.isError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getIp: () => dispatch(getIp())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyIp)