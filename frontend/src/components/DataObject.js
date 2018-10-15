
import React, { Component } from 'react';
import './DataObject.css';

class DataObject extends Component{
    state = {

    }
    
    render(){
        return(
            <div className="DataObject">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default DataObject