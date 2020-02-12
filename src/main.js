
import React,{Component} from 'react'
import About from './components/about/index';
import Footer from './components/footer/index'
import Home from './components/home/index'
import Portfolio from './components/portfilio/index'
import Profile from './components/profile/index'
import SocialeMedia from './components/socialeMedia/index'
import Work from './components/work/index'

class Main extends Component{
render (){
    return (
    <div>
      <Home/>
      <Work/>
      <Portfolio />
      <Profile />
      <About/>
      <SocialeMedia />
      <Footer/>
    </div>
 
  
 );
}}

export default Main;
