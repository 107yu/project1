import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
@inject("data")
@observer
class Video extends Component {
    getList(id){
       this.props.data.getDetail({id:id})
    }
    render() {
        let data=this.props.data.info
        return (
            <ul className="menu">
               {
                   data.urls&&data.urls.map((item,index)=>{
                        return <li key={index} onClick={()=>{this.getList(item.urlid)}}>第{index+1}集</li>
                   })
               } 
            </ul>
        )
    }
}
export default Video