import React,{useState,useEffect} from "react"
import {connect} from "dva"
import { Row, Col,Tag ,Select,Button } from 'antd';
import "./watch.css"


const { Option } = Select;


const { CheckableTag } = Tag;
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
function WatchQuestions(props){
    props.examType()
    props.getSubject()
    props.getQuestions()
    return (
        <div className="watchQuestions_wrapper">
            <h2>查看试题</h2>
            <div className="watchQuestions_content">
                <Row>
                <div>
                    <h5 style={{ marginRight: 8, display: 'inline' }}>Categories:</h5>
                    {tagsFromServer.map(tag => (
                    <CheckableTag
                        key={tag}
                        // checked={selectedTags.indexOf(tag) > -1}
                        // onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                    ))}
                </div>
                </Row>
                <Row>
                    <Col span={9}><label  style={{ display: 'inline' }}>考试类型:</label>
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                    <Col span={9}><label  style={{ display: 'inline' }}>考试类型:</label> 
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" icon="search">
                        查询
                        </Button>
                    </Col>
                </Row>

            </div>
            <div className="watchQuestions_content"></div>
           watchQuestions
        </div>
    )

}
let mapStateToProps=state=>{
    return {
        
    }
}
let mapDispatchToProps=dispatch=>{
    return {
        examType(){
            dispatch({
                type:"test/examType"
            })

        },
        getSubject(){
            dispatch({
                type:"test/subject"
            })

        },
        getQuestions(){
            dispatch({
                type:"test/questions"
            })

        }
        
        
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(WatchQuestions)