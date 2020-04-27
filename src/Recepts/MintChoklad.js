import React from "react";
import { Login } from "../Login/Login.js";

//Varför separata komponenter för varje recept? De är ju praktiskt taget identiska
//Och hur skulle det bli när du har 1000 recept i din databas?
//Du skall ha EN Recept-komponent som styr hur ett recept skall visas. Till den 
//skickar du in allt som behövs för att visa ett recept.
export function MintChoklad(props) {

  function Back() {
    props.navigate(0)
  }

  return <div className="HeaderMint">
    <header><h1>Mintchocklad</h1><Login /><button className="Back" onClick={Back}>Tillbaka</button></header>
    <h2>GÖR SÅHÄR</h2>
    <div>
      {props.treedata.instruction}
    </div>
    <br></br>
    <h2>INGREDIENSER</h2>
    <div>
      {props.treedata ? props.treedata.ingrediens.map(mängd => <div>{mängd.name}:{mängd.mängd}</div>) : false}
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