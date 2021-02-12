import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { Header, Footer, Drawer } from 'views/layouts';
import { useRootStore } from 'config/store';

import { useStyles } from './styles';

const Content: FC = observer(({ children }) => {
	const classes = useStyles();
	const {
		featureAuth: { isAuthenticated },
	} = useRootStore();

	return (
		<>
			<Header />
			<div className={classes.toolbar} />
			{isAuthenticated && <Drawer />}
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	);
});

export { Content };
