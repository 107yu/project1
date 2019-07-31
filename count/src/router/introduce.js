import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
@inject("data")
@observer
class Introduce extends Component {
    render() {
        let data=this.props.data.info
        return (
            <div>
                <h6>主演：{data&&data.actor}</h6>
                <h6>from：{data&&data.area}</h6>
                <h6>上映时间：</h6>
                <h6>导演：{data&&data.director}</h6>
                <h6>更新时间：</h6>
                <h6>上映时间：</h6>
                <h6>线下支持：{data&&data.movid}</h6>
                <h4>
                    <img src={data&&data.pic} alt=""/>
                </h4>
               
            </div>
        )
    }
}
export default Introduce