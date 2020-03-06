import React from "react";
import {Login} from "../Login/Login.js";
import settCurrentData from "../Website/Start.js";


export function Chokladmouse(props){
    function Back(){
        props.navigate(0)
    }

    console.log(props.data)
    return<div className="HeaderChoklad">
        <header><h1>Chokladmouse<button className="Back" onClick={Back}>Tillbaka</button></h1><Login/></header>
        <h2>GÖR SÅHÄR</h2>
        <div> 
          {props.data.instruction}
        </div>
        
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
export default Chokladmouse;