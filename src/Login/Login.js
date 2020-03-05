import React from "react";

export function Login(props){
    return <div className="dropdown">
    <div className="dropdown-trigger">
      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
        <span>Log in</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu3" role="menu">
      <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        Overview
      </a>
      <a href="#" className="dropdown-item">Modifiers</a>
          </div>
          </div>
          </div>
}