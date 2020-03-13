import React from 'react';

import { Start } from "./Start";
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
  const [currentData, settCurrentData] = React.useState(undefined);
  function navigate(id) {
    setPage(id);
  }

  let Startpage = null;
  if (page === 0)
    Startpage = <Start navigate={navigate} setData={settCurrentData} />
  else if (page === 1)
    Startpage = <Chokladmouse navigate={navigate} data={currentData} />;
  else if (page === 2)
    Startpage = <VitChoklad navigate={navigate} twodata={currentData} />;
  else if (page === 3)
    Startpage = <MintChoklad navigate={navigate} treedata={currentData} />;

  return <div>
    {Startpage}
  </div>
}

export default App;
