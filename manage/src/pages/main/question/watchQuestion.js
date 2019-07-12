import React,{useState,useEffect} from 'react'
import styles from "./question.scss"
import {connect} from "dva"
import { Tag ,Select,Button,Table,List, message, Avatar, Spin} from 'antd';
const { Option } = Select;
const { CheckableTag } = Tag;
function  WatchQuestion (props) {
    const subjectType =JSON.parse(sessionStorage.getItem("subjectType"))
    const examType =JSON.parse(sessionStorage.getItem("examType"))
    const questionType =JSON.parse(sessionStorage.getItem("questionType"))
    let [selectedTags,setSelectedTags]=useState([])
    let [allTags,setAllTags]=useState(false)
    let handleChange=(tag, checked)=> {
        const nextSelectedTags = checked ?[...selectedTags, tag]: selectedTags.filter(t => t !== tag);
        setSelectedTags([tag])
      }
    let onChange=()=>{

    }
    let changeAll=()=>{
        setAllTags(!allTags)
        setSelectedTags(subjectType)
    }
    useEffect(()=>{
        props.getAllQuestions()
    },[])
    return (
        <div>
            <h2 style={{padding:20}}>查看试题</h2>
            <div>
                <div className={styles.watch_content}>
                    <div>
                        <h6 style={{ marginRight: 8, display: 'inline' }}>课程选择:</h6>
                        <span></span>
                        <CheckableTag
                            style={{margin:10}}
                            checked={allTags}
                            onChange={changeAll}
                        >
                        All
                        </CheckableTag>
                        {subjectType.map(tag => (
                        <CheckableTag
                            key={tag.subject_id}
                            checked={selectedTags.indexOf(tag.subject_text) > -1}
                            onChange={checked =>handleChange(tag.subject_text, checked)}
                            style={{margin:10}}
                        >
                            {tag.subject_text}
                        </CheckableTag>
                        ))}
                    </div>
                    <div style={{display:"flex",flexWrap:'wrap'}}>
                        <span style={{paddingRight:10}}>
                            <span>考试类型：</span>
                            <Select         
                                style={{ width: 200 }}            
                                onChange={onChange}
                            >
                                {
                                    examType.map((item)=>{
                                        return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                    })
                                }
                            </Select>
                        </span>
                        <span style={{paddingRight:10}}>
                            <span>题目类型：</span>
                            <Select
                                style={{ width: 200 }}
                                onChange={onChange}
                            >
                                {
                                    questionType.map((item)=>{
                                        return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                    })
                                }
                            </Select>
                        </span>
                        <span style={{marginLeft:20}}><Button type="primary" style={{width:120}}>搜索</Button></span>         
                    </div>
                </div>
                <div className={styles.watch_content}>
                    {
                        props.questions.length&&props.questions.map((item,index)=>{
                            return <div className={styles.watch_list} key={index}>
                                        <div className={styles.watch_list_infor}>
                                            <a href="#">
                                                <div>
                                                    <div>{item.title}</div>
                                                    <div>
                                                        <div  className={styles.wtach_type}>
                                                            <Tag color="blue">{item.questions_type_text}</Tag>
                                                            <Tag color="geekblue">{item.subject_text}</Tag>
                                                            <Tag color="gold">{item.exam_name}</Tag>
                                                        </div>
                                                        <div><span>{item.user_name}发布</span></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#"><span>编辑</span></a>
                                        </div>
                                    </div>    
                        })
                    }         
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        questions:state.watch.questions
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       getAllQuestions(){
           dispatch({
               type:"watch/allquestions",
           })
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WatchQuestion)