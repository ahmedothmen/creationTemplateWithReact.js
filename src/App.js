
import React,{Component} from 'react'
import './App.css'
import Contact from './components/contact/index'
import NavBar from './components/navBar/index'
import Main from './main'
import {BrowserRouter, Route} from'react-router-dom'

class App extends Component{
render (){
    return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Route exact path="/" component={Main} />
       <Route path='/contact' component={Contact} />
      </BrowserRouter>
    </div>
 
  
 );
}}

export default App;
