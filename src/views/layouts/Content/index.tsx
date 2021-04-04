import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Drawer from 'views/layouts/Drawer';
import Footer from 'views/layouts/Footer';
import Header from 'views/layouts/Header';
import { useAuthStore } from 'pages/Login/store';

import { useStyles } from './styles';

const Content: FC = ({ children }) => {
  const classes = useStyles();

  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <Header />
      <div className={classes.toolbar} />
      {isAuthenticated && <Drawer />}
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default observer(Content);
