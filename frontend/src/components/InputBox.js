import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component{
    state = {
        value:""
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div className="DataObject">
                <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text"/>
                <div className="add" onClick={this.props.fetch.bind(this,"insert","insert","POST",this.state.value)}></div>
            </div>
        )
    }
}

export default InputBox