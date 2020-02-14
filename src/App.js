import React from 'react';
import {Login} from "./Login.js"
import './App.css';

function App() {
  return (
    <div className>
      <header>Efterätt<Login onLogin={""}/></header>


      <p>Välkommen till denna sajt. Här kan du hitta olika recept på efterrätter.<br></br>Vill du lägga in, ta bort eller ändra ditt/dina recept så måste du logga in.<br></br>
      klicka på knappen "logga in" uppe till höger för att logga in.<br></br>Vill du registrera dig klickar du där också, skriv in avn och lösen och klickar på"ny användare"</p>
      <button>Lägg till recept</button><br></br>

      <div className="kategorier">
      <a href="">Choklad</a>
      </div>
    </div>
    
    
  );
}

export default App;
