import React, { Component } from 'react'
import Mine from "../component/mine"
import Classify from "../component/classify"
import Video from "../component/video"
import "./home.css"
import {inject,observer} from "mobx-react"
@inject("data")
@observer
 class home extends Component {
    componentDidMount(){
       this.props.data.getData()
    }
    render() {
        let data=this.props.data.info
        return (
            <>
                <header className="header">
                    <span className="goBack">{"←"}</span>
                    <p>{data.title}</p>
                    <span className="goBack"></span>
                </header>
                <Video></Video>
                <Mine></Mine>
                <Classify></Classify>
            </>
        )
    }
}
export default home;