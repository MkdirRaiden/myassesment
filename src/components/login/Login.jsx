import React, {useState} from 'react';
import './login.css';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (event) => {
    event.preventDefault();
    const newEntry = {email: email, password: password};
    setAllEntry([...allEntry, newEntry]);
  }

  return (
    <>

      <div className='form-container'>
        <form className='login-form' action="" onSubmit={submitForm}>
          <h1>Sign In</h1>
          <div className='label-input-container'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete='off' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required/>
          </div>
          <div className='label-input-container'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete='off' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required/>
          </div>
          <button type='submit'>Submit</button>
          <p>Don't have an account? <span onClick={() => props.onFormSwitch('register')}>Sign Up.</span></p>
        </form> 
      </div>
      
    </>
  )
}

export default Login