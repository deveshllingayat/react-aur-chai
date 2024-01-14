import { useState } from 'react'
import './App.css'

function App() {
  //useState hook is used for changing state of the variable counter as react controls ui updation
let [counter,setCounter] = useState(5);

const increaseValue = ()=> {
  if(counter>=0 && counter<20) setCounter(++counter);
  // setCounter(++counter);
  // setCounter(++counter);
  // setCounter(++counter);
  // setCounter(++counter); this four lines should add counter value by 4 but as we have seen react fiber it updates tree in batches
  //so this 4 statements form a batch and there is no difference in all 4 statements so react will only execute setCounter(++counter) one time 
  //but if we are in a situation where we actually need to write same statements multiple times then we use callback inside the setCounter(()=>{})
  // setCounter(prevCounter=>++prevCounter);
  // setCounter(prevCounter=>++prevCounter);
  // setCounter(prevCounter=>++prevCounter);
  // setCounter(prevCounter=>++prevCounter);
  //this actually do not forms a batch as the statement is expecting a previous value inside callback which is coming after executing its previous statement so each statement is executed one by one
  // now this 4 statements will result in addition of +4 to countervalue
};
const decreaseValue = ()=> {
  if(counter>0) setCounter(--counter);
};
//below code will change the counter value but will not update the Ui as react controls the whole ui updation so we need to use hooks to update the counter value in ui 
//if counter is used in many places in ui then it will not be good to use dom manipulation for each element where counter is used to update its value
//let counter = 5;
// const increaseValue = ()=> {
//   if(counter>=0 && counter<20) ++counter;
// };
// const decreaseValue = ()=> {
//   if(counter>0) --counter;
// };

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={increaseValue}>Increase Value</button>
     <span> </span>
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
