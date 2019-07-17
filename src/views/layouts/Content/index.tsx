/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Container from '@material-ui/core/Container';

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
			<main className={classes.root}>
				<Container maxWidth="md">{children}</Container>
			</main>
			<Footer />
		</>
	);
};

export { Content };
