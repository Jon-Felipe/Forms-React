import { useState } from 'react';

// components
import Input from './Input';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  function handleInputChange(id, e) {
    setEnteredValues((prevState) => {
      return { ...prevState, [id]: e.target.value };
    });

    setDidEdit((prevState) => {
      return { ...prevState, [id]: false };
    });
  }

  function handleInputBlur(id) {
    setDidEdit((prevState) => {
      return { ...prevState, [id]: true };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}
          value={enteredValues.email}
          onChange={(e) => handleInputChange('email', e)}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input
          label='Passord'
          id='password'
          type='password'
          name='password'
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password}
          onChange={(e) => handleInputChange('password', e)}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
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
