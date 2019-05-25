import React, { Component } from 'react'

import Row from './row';

class Rows extends Component{
    render() {
        return (
            <tbody>
                {
                    this.props.data.map((element, i) =>{
                        return <Row key={i} change={element} />
                    })
                }
            </tbody>
        )
    }
}

export default Rows;

