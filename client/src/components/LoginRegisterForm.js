import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { UserContext } from '../App';
import StandardPanel from './StandardPanel';
import {
  StandardLabel,
  StandardInput,
  StandardSubmitButton,
} from './Utils';

// Form component for Logging in or registering
const LoginRegisterForm = ({onSubmit, title, submitButtonText}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history])

  return (
    <StandardPanel>
      <form onSubmit={e => onSubmit(e, {username, password})}>
        <h4>{title}</h4>
        <StandardLabel htmlFor='username'>Username</StandardLabel>
        <StandardInput
          type='text'
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <StandardLabel htmlFor='password'>Password</StandardLabel>
        <StandardInput
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <StandardSubmitButton type='submit' value={submitButtonText} />
      </form>
    </StandardPanel>
  );
}

export default LoginRegisterForm;
