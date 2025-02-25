import './App.css';
import React from 'react'
// import Nav from './Nav'
// import { Component } from 'react';
//class App extends React.Component {
//   constructor()
//   {
//     super()
//     this.state={
//       show:true
//     }
//     console.warn("constructor"); 
//   }
//   componentDidMount(){
//     console.warn("componentDidMount"); 
//   }
//   render()
//   {
//     console.warn("render"); 
//     return(
//       <div>
//       <h1> Life Cycle Method</h1>
//       {
//         this.state.show ?
//         <Nav />
//         :null
//       }
//       <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle NavBar</button>
//       </div>
//     )
//   }
// }



//  class App extends React.Component { 
//   constructor()
//   {
//     super()
//     this.state={
//       data:false
//     }
//     console.warn("constructor"); 
//   }
//   componentDidMount(){
//         console.warn("componentDidMount"); 
//         this.setState({data:true})
//       }
//   render(){
//     console.warn("render"); 
//     return(
//       <div>
//         <h1>ComponenetDidMount Life Cycle</h1>
//         </div>
//     )
//   }
// }


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render(){
    return(
      <div>
        <h1>Component will Unmount</h1>
        {this.state.show?  <Child />:null}
        <button
        onClick={()=>{this.setState({show:!this.state.show})}}
        >
        Toogle Child</button>
      
      </div>
    )
  }
}

class Child extends React.Component{
  componentWillUnmount(){
    console.warn("component is hidden now"); 
  }
  render(){
    return(
      <div>
        <h2>Child Component</h2>
        
      </div>
    )
  }
}


//export default App;




