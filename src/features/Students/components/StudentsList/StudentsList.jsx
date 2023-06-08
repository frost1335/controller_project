import React from "react";
import "./StudentsList.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const StudentsList = () => {
  return (
    <div className="students_list">
      <div className="list_head">
        <h1 className="list_title">Studentslar</h1>
      </div>
      <div className="list_body">
        <table className="list_table">
          <thead>
            <tr>
              <th>Ism</th>
              <th>Tel. raqam</th>
              <th>Guruh</th>
              <th>O'qituvchi</th>
              <th>Balans</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link className="table_link" to="/students/detail/24126">
                  Raximov Dilrozbek
                </Link>
              </td>
              <td>+998-93-189-73-18</td>
              <td>Web dasturlash</td>
              <td>Javlonbek Mirzaabdullayev</td>
              <td>800,000 so'm</td>
              <td className="button_item">
                <button className="settings_btn">
                  <BsThreeDotsVertical />
                  <div className="dropdown">
                    <ul>
                      <li>O'zgartitrish</li>
                      <li>O'chirish</li>
                      <li>Balans</li>
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

export default StudentsList;
