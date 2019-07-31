import React, { Component } from 'react'
import {NavLink,Route,Redirect} from "react-router-dom"
import Introduce from "../router/introduce.js"
import Video from "../router/video"
import Audio from "../router/audio"
export default class Classify extends Component {
    render() {
        return (
            <div className="classify">
                <div className="tap">
                    <NavLink to="/index/introduce" activeClassName="active">介绍</NavLink>
                    <NavLink to="/index/video" activeClassName="active">视频</NavLink>
                    <NavLink to="/index/audio" activeClassName="active">音频</NavLink>
                </div>
                <div className="content">
                    <Route path="/index/introduce" component={Introduce}></Route>
                    <Route path="/index/video" component={Video}></Route>
                    <Route path="/index/audio" component={Audio}></Route>
                    <Redirect to="/index/introduce"></Redirect>
                </div>
            </div>
        )
    }
}
