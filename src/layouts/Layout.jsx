import React from "react";
import "./Layout.scss";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout_container">
        <div className="sidebar">
          <ul>
            <li>
              <div className="logo">Work Fly</div>
            </li>
            <li>
              <NavLink to="/lids">Lidlar</NavLink>
            </li>
            <li>
              <NavLink to="/students">Studentlar</NavLink>
            </li>
            <li>
              <NavLink to="/teachers">O`qituvchilar</NavLink>
            </li>
            <li>
              <NavLink to="/groups">Guruhlar</NavLink>
            </li>
          </ul>
        </div>
        <div className="layout_content">
          <nav>
            <div className="search">
              <input type="text" placeholder="search for students" />
            </div>
            <div className="account">
              <div className="user_icon">RD</div>
            </div>
          </nav>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
