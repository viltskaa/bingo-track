import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/app.css'
import FireAPI from "./ServerData/FireBase.js";

export const firebaseContext = createContext(new FireAPI());

ReactDOM.createRoot(document.getElementById('root')).render((<App />))
