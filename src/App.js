import React, {useState} from 'react';
import {Header, Login, Register} from './components';
import './App.css';

const App = () => {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div className='App'>
      <Header/>

      {
         (currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register Login onFormSwitch={toggleForm}/>)
      }
      
    </div>
  )
}

export default App
