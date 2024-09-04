import { useState, useCallback, useEffect, useRef } from "react";
//kisi bhi chiz ka reference lena ho to useRef hook use krte hai
import './App.css';

function App() {
  //as the password is dependent on length, numbers,chars value so these are all state variables which can change the password and password itself changes on the basis of these varibales so it is also a state variable
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState();
  //useRef() hook
  const passwordRef = useRef(null);
  
  //usecallback(()={},[dependencies]); hook is used to cache some part of function to prevent no. of re renders which improves performance, it accepts a callback and an array of dependencies on which the callback is dependent
  const passwordGenerator = useCallback(() => {
    //an empty string to store random password
    let pass = "";
    //a string with all alphabates which will be used for password generation
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //if user checks Numbers/Characters checkbox then it will add those things to the str
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    //looping otill length of password and generating a random no. between 1 and length of str, then appending the character at that index returned from random no. into pass
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);//changing the password value to newly generated value
  }, [length, numberAllowed, charAllowed, setPassword]);//dependency array i.e the varibles that we will need frequently for our function passwordGenerator

  //we cannot run above function directly like passwordGenerator() even if we dont use useCallback() hook because react controls ui updation so it limits the rerendering
  //we are using useCallback() to optimize our code i.e bcz of this hook it caches the password dependencies and use it whenever it requires

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();//highlights the password
    
    window.navigator.clipboard.writeText(password);//this works fine but we used useRef hook to make UX better i.e to highlight the copied text using useRef
  },[password])

  //for that we use useEffect(()={},[dependencies])  to call the passwordGenerator() and rerun it whenever any dependency from array changes
  useEffect(()=>passwordGenerator(),[length,numberAllowed,charAllowed,passwordGenerator])

  //both dependency arrays from useCallback and useEffect are different bcz one is used for caching and one is used for rerendering on change.

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">

        <h1 className="text-3xl text-center text-white py-2">
          Password Generator
        </h1>

        <div className="flex shadow  overflow-hidden p-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3  "
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button id="copyBtn" onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 " >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 py-2">

          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              id="length"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {setcharAllowed((prev) => !prev)}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
        
      </div>
    </>
  );
}

export default App;
