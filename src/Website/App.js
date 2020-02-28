import React from 'react';

import {Start} from "./Start";
import '../Sass/App.scss';
import { Chokladmouse } from '../Recepts/ChokladMouse';
import { VitChoklad } from '../Recepts/VitChoklad';
import { MintChoklad } from '../Recepts/MintChoklad';


/**
 * @param {object} props
 * @param {function} ontransitionstart.onNavigate
 */


function App(props) {

  const [page, setPage] = React.useState(0);

  function navigate(id){
    console.log(`Navigate: ${id}`)
    setPage(id);
  }

  let Startpage = null;
  if(page === 0)
  Startpage = <Start navigate={navigate}/>
  else if(page === 1)
  Startpage = <Chokladmouse navigate={navigate}/>;
  else if(page === 2)
  Startpage = <VitChoklad navigate={navigate}/>;
  else if(page === 3)
  Startpage = <MintChoklad navigate={navigate}/>;

  return <div>
    {Startpage}
  </div>
}

export default App;
