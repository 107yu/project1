import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./views/home";
import "./index.css"
//引入模块
import {Provider} from "mobx-react"
//引入数据
import store from "./store/index"

ReactDOM.render(<Provider {...store}>
    <Home />
</Provider>,document.getElementById('root'));


