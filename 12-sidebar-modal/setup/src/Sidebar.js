import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} target="_blank">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <a href={url} target="_blank" key={id}>
              {icon}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
