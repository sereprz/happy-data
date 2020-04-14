import React, {
  useState,
  useEffect
} from 'react';
import logo from './logo.svg'; //not in use
import './App.css';

function App() {
  const [mathFact, setMathFact] = useState(0);
  const [mathFactMessage, setMathFactMessage] = useState('');
  const [peopleInSpace, setPeopleInSpace] = useState(0);
  const [peopleInSpaceMessage, setPeopleInSpaceMessage] = useState('');

  const getPeopleInSpace = () => {
    fetch('/people-in-space').then(res => res.json()).then(data => {
      setPeopleInSpace(data.number);
      setPeopleInSpaceMessage(data.message);
    })
  }

  const getMathFact = () => {
    fetch('/math-fact').then(res => res.json()).then(data => {
      setMathFact(data.number);
      setMathFactMessage(data.message);
    })
  }

  useEffect(() => {
    getMathFact();
    getPeopleInSpace();
  }, []);

  return (
    <div className="App">
      <div>
        <div className='row'>
          <div className='col-12'>
            <h1> Happy numbers </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            Tyle number 1
            <p style={{ fontSize: '40px' }}>{mathFact} </p>
            <p style={{ fontSize: '20px' }}>{mathFactMessage}</p>
          </div>
          <div className='col-6'>
            Tyle numer 2
        <p style={{ fontSize: '40px' }}>{peopleInSpace}</p>
            <p style={{ fontSize: '20px' }}>{peopleInSpaceMessage}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            Tyle number 3
      </div>
          <div className='col-6'>
            Tyle numer 4
      </div>
        </div>
      </div>
    </div>
  );
}
export default App;