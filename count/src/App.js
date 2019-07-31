import React, { Component } from 'react'
import "./app.css"
import Home from "./views/home"
export default class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Home></Home>
            </div>
        )
    }
}
