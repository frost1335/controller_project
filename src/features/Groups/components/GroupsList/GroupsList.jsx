import React from "react";
import "./GroupsList.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const GroupsList = () => {
  return (
    <div className="groups_list">
      <div className="list_head">
        <h1 className="list_title">Guruhlar</h1>
      </div>
      <div className="list_body">
        <table className="list_table">
          <thead>
            <tr>
              <th>Guruh nomi</th>
              <th>Kurs</th>
              <th>O'qituvchi</th>
              <th>Kunlari</th>
              <th>Vaqti</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link className="table_link" to="/groups/detail/24126">
                  Alfreds Futterkiste
                </Link>
              </td>
              <td>Web dasturlash</td>
              <td>Javlonbek Mirzaabdullayev</td>
              <td>Sha-Yak</td>
              <td>18:00-20:00</td>
              <td className="button_item">
                <button className="settings_btn">
                  <BsThreeDotsVertical />
                  <div className="dropdown">
                    <ul>
                      <li>O'zgartitrish</li>
                      <li>O'chirish</li>
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

export default GroupsList;
