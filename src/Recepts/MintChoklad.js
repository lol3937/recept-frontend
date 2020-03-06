import React from "react";
import {Login} from "../Login/Login.js";

export function MintChoklad(props){

    function Back(){
        props.navigate(0)
    }

    return <div className="HeaderMint">
        <header><h1>Mintchocklad</h1><Login/><button className="Back" onClick={Back}>Tillbaka</button></header>
        <h2>GÖR SÅHÄR</h2>
        <div>
          {props.data.instruction}
        </div>
        <h1>INGREDIENSER</h1>
        
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