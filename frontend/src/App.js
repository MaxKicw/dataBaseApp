import React, { Component } from 'react';
import './App.css';
import DataObject from './components/DataObject';
import InputBox from './components/InputBox';

class App extends Component {

  state = {
    objects:[],
    value:'',
  }

  componentDidMount(){
    this.update();
  };

  update(){
    this.apiCall("/get-all-data","GET");
  }

  apiCall = (url,method,body) => {
    let that = this;
    var type = url.split("/",2);
    type = type.splice(1);
    let fetchBody;
    switch(type[0]){
      case 'get-all-data':
      case "get-data":
      case "delete":
        fetchBody=undefined;
        break;
      case "insert":
        fetchBody={"name":body};
        break;
      default:
      console.log("Nix davon");
        break;
    }
    console.log("API-Call with type of "+type+" to "+url+",with method of "+method+" and this body: "+fetchBody);
    return fetch(new Request('http://localhost:5000'+url,{
      method: method,
      headers: new Headers({
        'Content-Type':'application/json',
        'Access-Control-Allow-Methods':"GET, POST, OPTIONS, PUT, PATCH, DELETE",
        'Access-Control-Allow-Origin':"http://localhost:3000",
      }),
      body: JSON.stringify(fetchBody)
    }))
    .then(function(res){
      return res.json()
    })
    .then(function(res){
      switch(type[0]){
        case "get-all-data":
          that.setState({objects:res});
          break;
        case "insert":
        case "delete":
          that.update();
          break;
        default:
          console.log("err");
          break;
      }
     
    })  
  };

  render() {
    return (
      <div className="App">
      <InputBox fetch={this.apiCall} value={this.state.value}/>
        {this.state.objects.map((user,index)=>{
          return <DataObject name={user.name} key={index} id={user._id} fetch={this.apiCall}/>
        })}
      </div>
    );
  }
}

export default App;
