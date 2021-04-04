import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from 'router';
import { useAuthStore } from 'pages/Login/store';
import Content from 'views/layouts/Content';

import { useStyles } from './styles';

const App: FC = () => {
  const classes = useStyles();

  const { isAuthenticated, selectedTheme, authenticate } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      authenticate();
    }
  }, [isAuthenticated, authenticate]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <CssBaseline />
        <div className={classes.app}>
          <Content>
            <Router />
          </Content>
        </div>
      </>
    </ThemeProvider>
  );
};

export default observer(App);
