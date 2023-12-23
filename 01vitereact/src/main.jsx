import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  


const reactElement = React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'},
  'click to visit google'
    
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
     <App />
    // reactElement
)
