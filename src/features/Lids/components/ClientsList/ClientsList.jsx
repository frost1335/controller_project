import React from "react";
import "./ClientsList.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const ClientsList = () => {
  return (
    <div className="clients_list">
      <div className="list_head">
        <h1 className="list_title">Lidlar</h1>
      </div>
      <div className="list_body">
        <table className="list_table">
          <thead>
            <tr>
              <th>Ism</th>
              <th>Ma'lumot</th>
              <th>Tel. raqam</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Telegram orqali aniqlandi</td>
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
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Instagramda podpiscik</td>
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

export default ClientsList;
