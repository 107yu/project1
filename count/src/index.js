import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./index.css"
import {Provider} from "mobx-react"
import {BrowserRouter} from "react-router-dom"
import store from "./store/index"
ReactDOM.render(<Provider {...store}>
   <BrowserRouter>
   <App></App>
</BrowserRouter>
</Provider>,document.getElementById('root'));


