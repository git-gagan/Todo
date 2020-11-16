import React from 'react'
import name from './name'
//another way of inline styling here
function Greet(props){
    const date= new Date()                  //new instance for Date
    let time=date.getHours()
    let min=date.getMinutes()
    let greeting=""
    const styles={
        fontFamily:'Comic-sans ms'
    }
    if(time>=0 && time<12){
        greeting='Good Morning'
        styles.color='Orange'
        styles.fontFamily='Comic-sans ms'
    }
    else if(time<17){
        greeting='Good Afternoon'
        styles.color='Yellow'
    }
    else if(time<20){
        greeting='Good Evening'
        styles.color='DodgerBlue'
    }
    else{
        greeting='Good Night'
        styles.color='Silver'
    }
    //inline CSS styling 
    //it expects a JS object
    return(
        <div>
            <h3 style={styles}>Welcome {name}, {greeting}!</h3>This is your To-Do List for today....
            <p style={{color:'skyblue', fontFamily:'sans-serif', fontSize:20}}><i>Active Now at {`${time}:${min}`}</i></p>
        </div>
    )
}

export default Greet