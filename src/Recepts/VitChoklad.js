import React from "react";
import { Login } from "../Login/Login.js";

export function VitChoklad(props) {

  function Back() {
    props.navigate(0)
  }

  return <div className="HeaderVit">
    <header><h1>VitChoklad</h1><Login /><button className="Back" onClick={Back}>Tillbaka</button></header>
    <h2 className="DoThis">GÖR SÅHÄR</h2>
    <div>
      {props.twodata.instruction}
    </div>
    <br></br>
    <h2>INGREDIENSER</h2>
    <div>
      {props.twodata ? props.twodata.ingrediens.map(mängd => <div>{mängd.name}:{mängd.mängd}</div>) : false}
    </div>
    <br></br>
    <article className="media">
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

          </div>
        </nav>
      </div>
    </article>
  </div>
}