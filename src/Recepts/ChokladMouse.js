import React from "react";
import {Login} from "../Login/Login.js";


export function Chokladmouse(props){
    function Back(){
        props.navigate(0)
    }

    return <div className="HeaderChoklad">
        <header><h1>Chokladmouse<button className="Back" onClick={Back}>Tillbaka</button></h1><Login/></header>
        <article className="media">
  <figure className="media-left">
    <p className="image is-64x64"/>
  </figure>
  <div className="media-content">
    <div className="field">
      <p className="control"><textarea className="textarea" placeholder="Add a comment..."></textarea></p>
    </div>
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <a className="button is-info">Submit</a>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <label className="checkbox"input type="checkbox"> Press enter to submit</label>
        </div>
      </div>
    </nav>
  </div>
  </article>
  </div>
}