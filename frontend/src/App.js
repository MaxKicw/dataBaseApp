import React, { Component } from 'react';
import './App.css';
import DataObject from './components/DataObject';
import InputBox from './components/InputBox';

class App extends Component {

  state = {
    objects:[{name:'Max'},{name:"Franz"}],
  }

  componentDidMount(){
    this.apiCall("/get-all-data","GET");
  };

  apiCall = (url,method,body) => {
    let that = this;
    let fetchBody = body;
    return fetch(new Request('http://localhost:5000/'+url,{
      method: method,
      headers: new Headers({
        'Content-Type':'application/json',
        'Access-Control-Allow-Methods':'GET, POST'
      }),
      body: JSON.stringify(fetchBody)
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
      <InputBox/>
        {this.state.objects.map((user,index)=>{
          return <DataObject name={user.name}/>
        })}
      </div>
    );
  }
}

export default App;
