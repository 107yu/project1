import React, {useState,useEffect } from 'react'
import styles from "./question.scss"
import Editor from 'for-editor'
import { Select,Button,Modal } from 'antd';
import {connect} from "dva"
const { Option } = Select;
function AddQuestion (props) {
    //标题
    let [title,settitle]=useState("")
    //题干
    let [content,setcontent]=useState(undefined)
    //答案
    let [answer,setAnswer]=useState(undefined) 
    //弹框显示与否  
    let [visible,setvisible]=useState(false)
    //考试类型
    let [exam,setexam]=useState("")
    //课程类型
    let [subject,setsubject]=useState("")
    //题目类型
    let [question,setquestion]=useState("")
    useEffect(()=>{
        props.getExamType()
        props.getSubject()
        props.getQuestionType()
        props.addQuestion()
    },[])
    let contentChange=(value)=>{
        setcontent(value)
       }
    let titleChange=(e)=>{
        settitle(e.target.value)
        }
    let answerChange=(value)=>{
        setAnswer(value)
        }
    // if(props.examType[0]){
    //     setexam(props.examType[0].exam_name)
    // }
    // if(props.subject[0]){
    //     setsubject(props.subject[0].subject_text)
    // }
    // if(props.questionType[0]){
    //     setquestion(props.questionType[0].questions_type_text)
    // }
    function changeExamType(value) {
        console.log(value)
    }
    function changeQuestionType(value) {
        console.log(value)
    }
    function changeSubject(value) {
        console.log(value)
    }
    let showModal = () => {
        //出弹框
        setvisible(true)
        console.log(title,content,answer)
        props.addQuestion()
      };  
    let  handleOk = e => {
        setvisible(false)
      };
    let  handleCancel = e => {
        setvisible(false)
      };
    
    return (
        <div className={styles.add_question}>
            <h2 className={styles.top}>添加试题</h2>
            <div className={styles.question_content}>
                <form>
                    <h3>题干信息</h3>
                    <div className={styles.ant_from_item}>
                        <div className={styles.label}><label title="题干"> 题干</label></div>
                        <div><input type="text" placeholder="请输入题目标题,不超过20个字" value={title} onChange={titleChange}/></div>
                    </div>
                    <div className={styles.ant_from_item}> 
                        <div className={styles.label}><label title="题干"> 题目主题</label></div>
                        <div className={styles.editor}><Editor value={content} onChange={contentChange} style={{height:200}} ></Editor></div>
                    </div>
                    <div>
                        <div className={styles.ant_from_item}>
                            <div className={styles.label}><label title="请选择考试类型"> 请选择考试类型：</label></div>
                            <div>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    defaultValue="周考一"
                                    optionFilterProp="children"
                                    onChange={changeExamType}
                                    filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                   {
                                       props.examType.length&&props.examType.map(item=>{
                                           return <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
                                       })
                                   } 
                                </Select>  
                            </div>
                        </div>
                        <div className={styles.ant_from_item}>
                            <div className={styles.label}><label title="请选择课程类型"> 请选择课程类型：</label></div>
                            <div>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    optionFilterProp="children"
                                    defaultValue="javaScript上"
                                    onChange={changeSubject}
                                    filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {
                                       props.subject.length&&props.subject.map(item=>{
                                           return <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
                                       })
                                   } 
                                </Select>  
                            </div>
                        </div>
                        <div className={styles.ant_from_item}>
                            <div className={styles.label}><label title="请选择题目类型"> 请选择题目类型：</label></div>
                            <div>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    optionFilterProp="children"
                                    defaultValue="简答题"
                                    onChange={changeQuestionType}
                                    filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {
                                       props.questionType.length&&props.questionType.map(item=>{
                                           return <Option value={item.questions_type_text} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                       })
                                   } 
                                </Select>  
                            </div>   
                        </div>
                    </div>
                    <h3>答案信息</h3>
                    <div className={styles.ant_from_item}> 
                        <div className={styles.editor}><Editor value={answer} onChange={answerChange} style={{height:200}} ></Editor></div>
                    </div>
                </form>
                <div>
                    <Button type="primary" onClick={showModal} className={styles.btn}> 提交 </Button>
                </div>
                <div>
                <Modal
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    cancelText="取消"
                    okText="确认"
                    >
                    <p>你确定要添加这道试题吗？</p>
                </Modal>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        examType:state.question.examType,
        subject:state.question.subject,
        questionType:state.question.questionType
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getExamType(){
            dispatch({
                type:"question/examType",
                payload:""
            })
        },
        getSubject(){
            dispatch({
                type:"question/subject"
            })
        },
        getQuestionType(){
            dispatch({
                type:"question/questionType"
            })
        },
        addQuestion(){
            dispatch({
                type:"question/addQuestion",
                payload:""
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddQuestion)