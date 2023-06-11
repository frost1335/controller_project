import React from "react";
import PaymentHistory from "../components/PaymentHistory/PaymentHistory";
import StudentInfo from "../components/StudentInfo/StudentInfo";

import './StudentDetailContent.scss'

const StudentDetailContent = () => {
  return (
    <>
      <PaymentHistory />
      <StudentInfo />
    </>
  );
};

export default StudentDetailContent;
