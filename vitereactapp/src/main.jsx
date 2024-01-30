import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
let username = 'VINAY KUMAR'
// const reactElement ={
//     type: 'a' , 
//     props: {
//       href: "https://www.google.com",
//       target: '_blank',
//     },
//     children: 'Click me to visit google'
//   };

const AreactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    username
)

function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
            {AreactElement}
            {/* {reactElement}  // Not Working */}
        </div>    
    )
}  
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <MyApp />
    
 
)
