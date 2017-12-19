import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AddSchool from './AddSchool';
import SearchSchool from './SearchSchool';
import AddStudent from './AddStudent';

class App extends Component {
 // updateSchool(address){
//    const{ editaddress } = this.state.ContractInstance;

 //   editidno(address, (err, result) => {
 //     if(err) console.error('All fields Required', err);
  //    console.log(result);
 //   })
 // }

  render() {
    return (

     
        <Switch>
          <Route exact path='/' component={SearchSchool}/>
          <Route path='/add_school' component={AddSchool}/>
          <Route path='/add_student' component={AddStudent}/>
        </Switch>

    );
  }
}

export default App;
