import React, { Component } from 'react'

import Heading from './heading';

class Headings extends Component{
    render() {
        return (
            <thead className="table-success">
                <tr>
                    {
                        this.props.headings.map((heading, i) => {
                            return <Heading key={i} heading={heading} />
                        })
                    }
                </tr>
            </thead>
        )
    }
}

export default Headings;