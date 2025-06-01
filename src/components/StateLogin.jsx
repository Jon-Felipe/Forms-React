// components
import Input from './Input';

// extras
import { isEmail, isNotEmpty, hasMinLength } from '../utils/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput('', (value) => {
    return hasMinLength(value, 6);
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (emailError || passwordError) {
      return;
    }
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
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={emailError && 'Please enter a valid email!'}
        />

        <Input
          label='Passord'
          id='password'
          type='password'
          name='password'
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordChange}
          error={passwordError && 'Please enter a valid password!'}
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
