/* npm imports: common */
import React from 'react';

/* root imports: view components */
import { Header, Footer, Drawer } from 'views/layouts';

/* local imports: common */
import { useStyles } from './styles';

const Content: React.FC = ({ children }) => {
	const classes = useStyles();

	return (
		<>
			<Header />
			<div className={classes.toolbar} />
			<Drawer />
			<main className={classes.root}>{children}</main>
			<Footer />
		</>
	);
};

export { Content };
