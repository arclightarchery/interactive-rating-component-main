import './style.css';
import CardContainer from './components/CardContainer.jsx';
import myContext from './myContext.js';
import { useState } from 'react';

function App() {
  const [hasRated, setHasRated] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <myContext.Provider
      value={{
        hasRated: hasRated,
        setHasRated: setHasRated,
        hasSubmitted: hasSubmitted,
        setHasSubmitted: setHasSubmitted,
        selected: selected, setSelected: setSelected
      }}>
      <CardContainer />
    </myContext.Provider>
  );
}

export default App;
