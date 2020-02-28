import React from "react";
import {Login} from "../Login/Login.js";

export function MintChoklad(props){

    function Back(){
        props.navigate(0)
    }

    return <div className="HeaderMint">
        <header>Chokladmouse<Login/><button onClick={Back}>Tillbaka</button></header>
        <h1>GÖR SÅHÄR</h1>
        <h1>INGREDIENSER</h1>
    </div>
}