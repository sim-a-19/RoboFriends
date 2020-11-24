import React from 'react'; //view library (little robot does the DOM manipulation for us)
import ReactDOM from 'react-dom'; //react for DOM (could also have imported react for mobile phones, VR, desktop apps, etc)
import './index.css'; //this index.css is a css file that corresponds to the react components in this index.js file 
//import Card from './Card'; //Hello.js because standard to have component file names capitalized
import reportWebVitals from './reportWebVitals'; //won't discuss in this course but serviceworkers allows our apps to potentially run faster and offline
import 'tachyons';
import App from './containers/App';




ReactDOM.render(<App />, document.getElementById('root')); //<App /> automatically assumes App.js
//can add props (properties) within the component tag

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

