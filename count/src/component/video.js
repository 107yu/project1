import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
@inject("data")
@observer
 class Video extends Component {
    render() {
        let data=this.props.data.info
        return (
            <div className="video">
                <input type="video" src={data&&data.pic} />
            </div>
        )
    }
}
export default Video