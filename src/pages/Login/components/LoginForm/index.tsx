import { FC, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Paper from '@material-ui/core/Paper';

import { useAuthStore } from '../../store';
import UsernameInput from '../UsernameInput';
import PasswordInput from '../PasswordInput';
import LoginTabs from '../LoginTabs';
import LoginButton from '../LoginButton';

import { useStyles } from './styles';

const LoginForm: FC = () => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { login, register } = useAuthStore();

  const isPasswordCorrect = useMemo(() => {
    return password === repeatPassword;
  }, [password, repeatPassword]);

  const isLoginReady = useMemo(() => {
    return !!username && !!password;
  }, [username, password]);

  const isRegistrationReady = useMemo(() => {
    return isLoginReady && isPasswordCorrect;
  }, [isLoginReady, isPasswordCorrect]);

  const tabClickHandler = (
    _e: React.ChangeEvent<Record<string, never>>,
    value: number
  ) => {
    setTabIndex(value);
  };

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const repeatPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setRepeatPassword(value);
  };

  const loginHandler = () => {
    if (isLoginReady) {
      login({
        username,
        password,
      });
    }
  };

  const registrationHandler = () => {
    if (isRegistrationReady) {
      register({
        username,
        password,
      });
    }
  };

  return (
    <Paper className={classes.paper}>
      <LoginTabs tabIndex={tabIndex} onChange={tabClickHandler} />
      <div className={classes.wrapper}>
        <UsernameInput value={username} onChange={usernameChangeHandler} />
        <PasswordInput value={password} onChange={passwordChangeHandler} />
        {tabIndex === 0 && (
          <LoginButton
            marginTop={14}
            gradient="secondary"
            onClick={loginHandler}
          >
            Login
          </LoginButton>
        )}
        {tabIndex === 1 && (
          <>
            <PasswordInput
              repeatPassword
              value={repeatPassword}
              onChange={repeatPasswordChangeHandler}
            />
            <LoginButton
              marginTop={14}
              gradient="secondary"
              onClick={registrationHandler}
            >
              Register
            </LoginButton>
          </>
        )}
      </div>
    </Paper>
  );
};

export default observer(LoginForm);
