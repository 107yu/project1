import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
@inject("data")
@observer
 class Audio extends Component {
    render() {
        let data=this.props.data.info
        return (
            <ul className="menu">
               {
                   data.urls&&data.urls.map((item,index)=>{
                        return <li key={index}>
                            {item.sort_title}
                        </li>
                   })
               } 
            </ul>
        )
    }
}
export default Audio