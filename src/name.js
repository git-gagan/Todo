function ask(){
    let name=prompt("What's your name?")
    let value=window.confirm(`You entered ${name},\nWanna move foreward?`)
    if(!value){
    name=ask()
    }
    return name;
}
const name=ask()
export default name