import React, {
  useState,
  useEffect
} from 'react';

import './App.css';

function App() {
  const [mathFact, setMathFact] = useState(0);
  const [mathFactMessage, setMathFactMessage] = useState('');
  const [peopleInSpace, setPeopleInSpace] = useState(0);
  const [peopleInSpaceMessage, setPeopleInSpaceMessage] = useState('');
  const [catArticles, setCatArticles] = useState(0);
  const [catArticlesMessage, setCatArticlesMessage] = useState('');

  const getNumberFromApi = (endpoint, setState, setMessage) => {
    fetch(endpoint).then(res => res.json()).then(data => {
      setState(data.number);
      setMessage(data.message);
    })
  }

  useEffect(() => {
    getNumberFromApi('/math-fact', setMathFact, setMathFactMessage);
    getNumberFromApi('/people-in-space', setPeopleInSpace, setPeopleInSpaceMessage);
    getNumberFromApi('/news', setCatArticles, setCatArticlesMessage);
  }, []);

  return (
    <div className="App container">
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1> Happy numbers </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 tile'>
            <p className='number'>{mathFact} </p>
            <p className='message'>{mathFactMessage}</p>
          </div>
          <div className='col-6 tile'>
            <p className='number'>{peopleInSpace}</p>
            <p className='message'>{peopleInSpaceMessage}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 tile'>
            <p className='number'>{catArticles}</p>
            <p className='message'>{catArticlesMessage}</p>
      </div>
          <div className='col-6 tile'>
            Tile numer 4
      </div>
        </div>
      </div>
    </div>
  );
}
export default App;