import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const emailIsInvalid =
    enteredValues.email !== '' && !enteredValues.email.includes('@');

  function handleInputChange(id, e) {
    setEnteredValues((prevState) => {
      return { ...prevState, [id]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={enteredValues.email}
            onChange={(e) => handleInputChange('email', e)}
          />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={enteredValues.password}
            onChange={(e) => handleInputChange('password', e)}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button type='submit' className='button'>
          Login
        </button>
      </p>
    </form>
  );
}
