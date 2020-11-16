import React from 'react'
//props modify the way components act, like html attributes
export default class Todoitem extends React.Component{
    //use the callback function on the event handler so as not to cross the maximum depth 
    //as the callback will only be called once the button is clicked 
    //and not at the time of rendering
    render(){
        const styles={
            color:"lightblue",
            textDecoration:"line-through",
            fontStyle:"italic"
        }
        return(
            <div className='two' style={this.props.item.completed?styles:null}>
                <input type='checkbox' id='one' checked={this.props.item.completed} onChange={!this.props.item.completed?()=>this.props.change(this.props.item.id):null}/>
                <label>{this.props.item.text}</label><br/>
            </div>
        )
    }
}
