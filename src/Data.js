function Ask(){ 
    let answer=prompt("How many tasks are there..?\nKeep it less than 5")
    if(answer>5){
        alert("Such a Big List..! Re-enter again.")
        answer=Ask();
    }
    return answer
}
const answer=Ask()
let Data=[]
for(var i=0;i<answer;i++){
    Data.push({
        id:i,
        text:prompt("Specify the task:"),
        completed:false
    })
}

export default Data