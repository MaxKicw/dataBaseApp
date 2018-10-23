import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component{
    state = {
<<<<<<< HEAD
        value:""
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
=======
        value:'',
    }
    
    changeHandler(e){
        this.setState({value:e.target.value});
>>>>>>> 6ef1d1060ac7a302d2c5bc24b7f0ba46bbbf4896
    }

    render(){
        return(
<<<<<<< HEAD
            <div className="DataObject">
                <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text"/>
                <div className="add" onClick={this.props.fetch.bind(this,"insert","insert","POST",this.state.value)}></div>
=======
            <div>
                <div className="DataObject">
                    <input type="text" value={this.state.value} onChange={this.changeHandler.bind(this)}/>
                    <div className="Submit" onClick={this.props.fetch.bind(this,"/insert","POST",this.state.value)}></div>
                </div>
>>>>>>> 6ef1d1060ac7a302d2c5bc24b7f0ba46bbbf4896
            </div>
        )
    }
}

export default InputBox