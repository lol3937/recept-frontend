import React from 'react';
import {Login} from "../Login/Login.js";
import '../Sass/App.scss';


function App() {

  const [ShowModal, setShowModal] = React.useState(false);
    let modal = "modal";
    if (ShowModal === true) {
        modal = "modal is-active";
    }

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


  return (
    <div className>
      <header>Efterätt<Login onLogin={""}/></header>

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
          <img src="Chokladmouse.jpg"></img>
        </figure>
        <figure className="VitChoklad">
          <img src="VitChoklad.jpg"></img>
        </figure>
        <figure className="MintChoklad">
          <img src="MintChoklad.jpg"></img>
        </figure>
      </div>
    </div>
    
    
  );
}

export default App;
