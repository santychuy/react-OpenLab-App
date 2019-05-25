import React, {Component} from 'react';
import {format} from 'timeago.js';

import Headings from './Table/headings';
import Rows from './Table/rows';

class App extends Component{
    
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    
    //Ejecuta cuando se carguen componentes
    componentDidMount() {
        setInterval(async () =>{
            const res = await fetch('http://openlibrary.org/recentchanges.json?limit=5');
            const data = await res.json();
            const newData = this.formatData(data);
            this.setState({data: newData})
        }, 1000);
    }

    formatData(data){
        return data.map((data, i) => {
            return {
                "when": format(data.timestamp),
                "who": data.author.key,
                "description": data.comment
            }
        })
    }
    
    render(){
        return(
            <div className="container p-4">

                <h1>{this.props.titulo}</h1>

                <table className="table table-bordered">
                    <Headings headings={this.props.headings} />

                    <Rows data={this.state.data} />
                </table>

            </div>
        )
    }
}

export default App;