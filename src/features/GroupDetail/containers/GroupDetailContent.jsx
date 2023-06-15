import React from "react";
import "./GroupDetailContent.scss";
import GroupInfo from "../components/GroupInfo/GroupInfo";
import StudentsList from "../components/StudentsList/StudentsList";
import GroupAttendance from "../components/GroupAttendance/GroupAttendance";

const GroupDetailContent = () => {
  return (
    <div className="group_detail_content">
      <div className="content_item">
        <GroupInfo />
      </div>
      <div className="content_item">
        <StudentsList />
      </div>
      <div className="content_item">
        <GroupAttendance />
      </div>
    </div>
  );
};

export default GroupDetailContent;
