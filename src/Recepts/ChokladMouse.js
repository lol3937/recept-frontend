import React from "react";
import {Login} from "../Login/Login.js";


export function Chokladmouse(props){

    function Back(){
        props.navigate(0)
    }

    return <div className="HeaderChoklad">
        <header>Chokladmouse<Login/><button onClick={Back}>Tillbaka</button></header>
        <h1>INGREDIENSER</h1>
        <h2>4 port</h2>
        <li>50g Mörk CHoklad</li>
        <li>1 1/4 dl Vispgrädde</li>
        <li> 1 Äggula</li>
        <li>1 msk Strösocker</li>
        <li>1msk Vatten</li>

        <br></br>

        <h1>GÖR SÅHÄR</h1>
        <p> Hacka chokladen i mindre bitar och lägg i en bunke. <br></br> Vispa 1.5 dl av grädden löst och ställ kallt. <br></br>
        Koka upp resten av grädden och slå över den hackade chokladen, rör till en jämn smet. <br></br>
        Koka upp socker och vatten och häll i en jämn stråle över äggulorna under kraftig vispning till ett fint skum. <br></br>
        Blanda i chokladsmeten i äggskummet och vänd sedan i den vispade grädden. Fördela moussen i glas. Låt moussen stelna i kyl minst en tim. <br></br>
        
        Brända mandlar:
        Skala en tunn bit apelsinskal med potatisskalare. Finstrimla skalet. Smörj en bit bakplåtspapper med olja. <br></br> 
        Smält sockret i en liten kastrull. Rör ner apelsinskal och mandel med en träsked. Häll upp blandningen på papperet. <br></br>
        Låt det stelna cirka 30 minuter. Hacka det med en stor vass kniv. Strö den hackade mandeln över moussen.</p>  
    </div>
}