import React from 'react'
import './Todoitems.css'
import Todoitem from './Todoitem.js'
import Data from './Data.js'

export default class Todo extends React.Component {
    constructor(){
        super() //calls super method of parent class to inherit the features
        this.state={                //mutable way for component to maintain their own data
            mydata:Data,
        }
        this.change=this.change.bind(this)  //before calling setState, bind the function using setState
    }
    change(id){
        //instead of modifying the actual state, we create a new array and render it to show the change
            this.setState((prevstate)=>{
                const newdata= prevstate.mydata.map((element)=>{
                   if(element.id===id){
                       //element.completed= !element.completed      //this is wrong because in this way
                       //we are directly modifying the original state because
                       //OBJECTS ARE PASSED BY REFERENCE..... AND NOT BY VALUE
                       return{
                           ...element, //using spread operator to get the all the props of given object
                           completed: !element.completed   //manually flipping
                       }//returning a brand new object
                   }//where prevstate refers to prev state of our object and element is each array element
                   return element
               })
               return{
                   mydata:newdata       //assign the data
                }
            })
    }
    Over(){
        var ans=window.confirm("Are you leaving now...?")
        if(ans){
            document.body.innerHTML="<span class='end'>Thanks for Using...!</span>";
        }
        else{
            alert("You are back at it!")
        }
    }
    //map is a higher order array function working on each item of the given array and returning the mentioned value at each index.
    render(){
        const items=this.state.mydata.map((item)=>{
            return(
                <Todoitem key={item.id} item={item} change={this.change}/>
            )
        })
        return (
            <div className='one'>
                {items}
                <button onClick={this.Over}>Done!</button>
            </div>
        )
    }
}
