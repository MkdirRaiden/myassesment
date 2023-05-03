import React, {useState} from 'react';
import './register.css';

const Register = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (event) => {
    event.preventDefault();
    const newEntry = {name:name, email: email, password: password};
    setAllEntry([...allEntry, newEntry]);
  }

  return (
    <>

      <div className='form-container'>
        <form className='register-form' action="" onSubmit={submitForm}>
          <h1>Sign Up</h1>
          <div className='label-input-container'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete='off' 
            value={name} 
            onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className='label-input-container'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete='off' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='label-input-container'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete='off' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button type='submit'>Submit</button>
          <p>Already have an account? <span onClick={() => props.onFormSwitch('login')}>Sign In.</span></p>
        </form> 
      </div>
      
    </>
  )
}

export default Register