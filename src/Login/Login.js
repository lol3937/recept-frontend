import React from "react";

export function Login(props) {
  function Back() {
    props.navigate(0);
  }
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
        <p><label className="uname" htmlFor="uname"><b>Username: </b> </label>
          <input type="text" id="rusername"></input></p>

        <p><label className="psw" htmlFor="psw"><b>Password: </b></label>
          <input type="password" id="rpassword"></input></p>
        <button type="submit" onClick={Back}>Logga in</button>
      </div>
    </div>
  </div>
}