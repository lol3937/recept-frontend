import React from "react";
import {Login} from "../Login/Login.js";

export function Start(props){

    const [ShowModal, setShowModal] = React.useState(false);
    let modal = "modal";
    if (ShowModal === true) {
        modal = "modal is-active";
    }

    //Navigerar till receptet när man klickar på bilden
    function GotoChokladmouse(){
      props.navigate(1)
    }

    function GotoVitChoklad(){
      props.navigate(2)
    }

    function GotoMintChoklad(){
      props.navigate(3)
    }

    //Om man lägger till ett recept, modal stängs och recept läggs till
    function AddRecept(){
      if(""){
        closeModal();
      }
    }


    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return(<div className>
          <header><h1>Efterätt</h1><Login/></header>
    
          <p>Välkommen till denna sajt. Här kan du hitta olika recept på efterrätter.<br></br>Vill du lägga in, ta bort eller ändra ditt/dina recept så måste du logga in.<br></br>
          klicka på knappen "logga in" uppe till höger för att logga in.<br></br>Vill du registrera dig klickar du där också, skriv in avn och lösen och klickar på"ny användare"</p>
          
          <button onClick={openModal}>Lägg till recept</button><br></br>
          <div className={modal}>
          <div className="modal-background" />
          <div className="modal-content">
          <input className="input" id="steg" type="text" placeholder="Steg för steg"/>
          <input className="input" id="ingredienser" type="text" placeholder="Ingredienser"/>
          <button type="button" className="ClickAdd" onClick={AddRecept}>Lägg till</button>
          <button type="button" className="AddImg" onClick={""}>Infogra bild</button>
          </div>
          <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
          </div>
    
          <div className="kategorier">
          <a href="">Choklad</a>
          </div>
          <div className="Allarecept">
            <figure className="Chokladmouse">
            <p>Chokladmouse</p>
              <img src="Chokladmouse.jpg" onClick={GotoChokladmouse}></img>
            </figure>
            <figure className="VitChoklad">
            <p>VitChoklad</p>
              <img src="VitChoklad.jpg" onClick={GotoVitChoklad}></img>
            </figure>
            <figure className="MintChoklad">
            <p>MintChoklad</p>
              <img src="MintChoklad.jpg" onClick={GotoMintChoklad}></img>
            </figure>
          </div>
        </div>  
      );
}