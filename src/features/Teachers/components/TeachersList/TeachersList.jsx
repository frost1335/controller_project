import React from "react";
import "./TeachersList.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const TeachersList = () => {
  return (
    <div className="teachers_list">
      <div className="list_head">
        <h1 className="list_title">O'qituvchilar</h1>
      </div>
      <div className="list_body">
        <table className="list_table">
          <thead>
            <tr>
              <th>Ism</th>
              <th>Guruh</th>
              <th>Tel. raqam</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link className="table_link" to="/teachers/detail/123249">
                  Alfreds Futterkiste
                </Link>
              </td>
              <td>Web dasturlash</td>
              <td>+998-93-189-73-18</td>
              <td className="button_item">
                <button className="settings_btn">
                  <BsThreeDotsVertical />
                  <div className="dropdown">
                    <ul>
                      <li>O'zgartitrish</li>
                      <li>O'chirish</li>
                      <li>Qo'shish</li>
                    </ul>
                  </div>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersList;
