import React from "react";
import { BiUser } from "react-icons/bi";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { formatter } from "../../../../assets/scripts";

const ClientsCards = ({ students }) => {
  return (
    <div className="list_cards">
      {students.map((student, index) => (
        <div className="card" key={index + "-client"}>
          <div className="card_head">
            <div className="card_icon">
              <BiUser />
            </div>
            <h3>{student.name}</h3>
          </div>
          <div className="card_body">
            <p>{student.group}</p>
            <p>{student.teacher}</p>
            <span>{student.phone}</span>
            <h4>{formatter.format(student.balance)}</h4>
          </div>
          <div className="card_footer">
            <button>
              <AiOutlineEdit />
            </button>
            <button>
              <AiOutlineDelete />
            </button>
            <button>
              <AiOutlineUserAdd />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientsCards;
