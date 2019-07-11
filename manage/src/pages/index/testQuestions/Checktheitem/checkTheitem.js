import React, { useState, useEffect } from "react";
import { connect } from "dva";
import styles from "./checkTitem.scss";
import { Tag, TreeSelect } from "antd";
import { type } from "os";
const { CheckableTag } = Tag;
const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0"
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1"
  }
];
function CheckTheitem(props) {
  let [value, upvalue] = useState(undefined);
  let onChange = value => {
    console.log(value);
    upvalue(value);
  };
  useEffect(() => {
    props.getData();
    props.getAllLessons();//类型
    props.getAllexamType();//考试类型

  }, []);

  // console.log(props.list)
  // console.log(props.allthelessons);
  console.log(props.allexamtype);
 
  return (
    <div className={styles.checkTheitemBox}>
      <h2 className={styles.title}>查看试题</h2>
      <div className={styles.anyLayoutContent}>
        <div className={styles.form}>
          <div className={styles.ant_row}>
            <h6 style={{ marginRight: 8, display: "inline-block" }}>
              课程类型:
            </h6>
            <div className={styles.ant_label}>
              {props.allthelessons.map(tag => {
                // console.log(tag.subject_text)
                return (
                  <CheckableTag
                    className={styles.ant_select}
                    key={tag.subject_id}
                    //   checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => this.handleChange(tag.subject_text, checked)}
                  >
                    {tag.subject_text}
                  </CheckableTag>
                )

              })}
            </div>
          </div>

          <div className={styles.ant_row}>
            <div className={styles.ant_col}>
              <h5>考试类型:</h5>
              <TreeSelect
                style={{ width: 240 }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                allexamtype={props.allexamtype}
                treeData={treeData}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={onChange}
              />
            </div>
            <div className={styles.ant_col}>
              <h5>题目类型</h5>
              <TreeSelect
                style={{ width: 240 }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                treeData={treeData}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={onChange}
              />
            </div>
            <div className={styles.ant_col}>
              <button className={styles.ant_btn}>
                <span>查询</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.anyLayoutContent}>
        <div className={styles.ant_list}>
          {props.list.map((item, index) => {
            //console.log(item)
            return (< div className={styles.ant_list_item} key={index}>
              <div className={styles.ant_list_item_content}>
                <h4>{item.title}</h4>
                <div style={{ marginTop: "10px" }}>
                  <div
                    style={{ marginBottom: "10px", display: "flex" }}
                    className={styles.ant_tag_meta}
                  >
                    <div className={styles.ant_tag_blue}>{item.questions_type_text}</div>
                    <div className={styles.ant_tag_geekblue}>javaScript上</div>
                    <div className={styles.ant_tag_orange}>{item.exam_name}</div>
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      width: "117px",
                      color: "#0139fD",
                      height: "19px"
                    }}
                  >
                    {item.user_name} 发布
                </span>
                </div>
              </div>
              <p className={styles.ant_list_item_action}>
                <a href="#">编辑</a>
              </p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
const mapState = state => {
  return {
    ...state.checkTheItem
  };
};
const mapDispatch = dispatch => {
  return {
    getData: payload => {
      dispatch({
        type: "checkTheItem/All",
        payload
      });
    },
    //所有课程
    getAllLessons: payload => {
      dispatch({
        type: "checkTheItem/Lessons",
        payload
      })
    },
    //所有考试类型
    getAllexamType: payload => {
      dispatch({
        type: "checkTheItem/examtype",
        payload
      })
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(CheckTheitem);
