import React from "react";
import { connect } from "dva";
function AwaitingApprovalClass() {
    return <div>待批班级</div>;
}
export default connect()(AwaitingApprovalClass);
