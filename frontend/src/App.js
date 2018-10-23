import React, { Component } from 'react';
import './App.css';
import DataObject from './components/DataObject';
import InputBox from './components/InputBox';

class App extends Component {

  state = {
    objects:[{name:'Max'},{name:"Franz"}],
  }

  componentDidMount(){
    this.apiCall("get-all-data","get-all-data","GET");
  };

  apiCall = (type,url,method,body) => {
    let that = this;
    switch(type){
      case "insert":
        body = {"name":body};
        break;
      case "get-all-data":

        break;
      case "delete":

        break;
      case "get-data":

        break;
      case "change":

        break;
    }
    console.log("URL: "+url+",Methode: "+method+", Body: "+body);
    return fetch(new Request('http://localhost:5000/'+url,{
      method: method,
      headers: new Headers({
        'Content-Type':'application/json',
        'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Origin':'http://localhost:3000'
      }),
      body: JSON.stringify(body),
    }))
    .then(function(res){
      return res.json()
    })
    .then(function(res){
      that.setState({objects:res});
    })  
  };

  render() {
    return (
      <div className="App">
      <InputBox fetch={this.apiCall}/>
        {this.state.objects.map((user,index)=>{
          return <DataObject name={user.name}/>
        })}
      </div>
    );
  }
}

export default App;
