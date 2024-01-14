import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//const anotherUser = "here";//evaluated expression tree structure form hone k baad add hota hai
// const reactElement = React.createElement('a',{
//   href:"https://google.com",target:"_blank",
// },'visit google',anotherUser );

ReactDOM.createRoot(document.getElementById('root')).render(
   // reactElement // it can render this element with proper output but in strictMode it cannot render it bcz it expects a proper syntax of componenet
   <App/>
  // reactElement
)
