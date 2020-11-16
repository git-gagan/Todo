import logo from './logo.svg';
import './App.css';
import Greet from './Greet'
import Todo from './Todo.js'
import React from "react"
import  background from "./background.jpg"
//class based components gives us more power...!
class App extends React.Component{
  constructor(){
    super()
    this.state={
      isLoading:true
    }
  }
  //One of the lifecycle methods, use cautiously.
  //This one works only once after the component has mounted...
  componentDidMount(){
    setTimeout(()=>{                  // the settimeout function waits for the given time to execute the function inside
      this.setState({isLoading:false})
    },2000)
  }
  render(){ //render method is necessary in Class based Components
    const styles={
      backgroundImage:"URL("+background+")" ,
      color:"Silver",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      margin:0,
      fontSize:60
    }
    //conditional renderings
    return (
      <div>
        {this.state.isLoading ? <h1 style={styles}>Hi there....</h1> :
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>  
              <Greet/>
            </header>
            <Todo/>
          </div>
        }
      </div>
    );
    }
}

export default App;
