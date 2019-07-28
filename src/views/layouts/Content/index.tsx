/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { Header, Footer, Drawer } from 'views/layouts';

/* root imports: common */
import { AuthStore } from 'features/Login/store';

/* local imports: common */
import { styles } from './styles';

interface ContentProps extends WithStyles<typeof styles> {
	authStore?: AuthStore;
}

@inject('authStore')
@observer
class ContentComponent extends React.Component<ContentProps> {
	public render() {
		const { children, classes } = this.props;
		const { isAuthenticated } = this.props.authStore!;

		return (
			<>
				<Header />
				<div className={classes.toolbar} />
				{isAuthenticated && <Drawer />}
				<main className={classes.main}>{children}</main>
				<Footer />
			</>
		);
	}
}

const Content = withStyles(styles)(ContentComponent);

export { Content };
