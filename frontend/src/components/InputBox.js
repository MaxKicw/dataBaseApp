import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component{
    state = {
        value:'',
    }
    
    changeHandler(e){
        this.setState({value:e.target.value});
    }

    render(){
        return(
            <div>
                <div className="DataObject">
                    <input type="text" value={this.state.value} onChange={this.changeHandler.bind(this)}/>
                    <div className="Submit" onClick={this.props.fetch.bind(this,"/insert","POST",this.state.value)}></div>
                </div>
            </div>
        )
    }
}

export default InputBox