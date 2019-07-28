/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { GlobalStore } from 'config/global-store';
import { AuthStore } from 'features/Login/store';

/* local imports: common */
import { styles } from './styles';

interface HeaderProps extends WithStyles<typeof styles> {
	globalStore?: GlobalStore;
	authStore?: AuthStore;
}

@inject('globalStore', 'authStore')
@observer
class HeaderComponent extends React.Component<HeaderProps> {
	public toggleDrawer = () => {
		this.props.globalStore!.toggleDrawer();
	};

	public render() {
		const { classes } = this.props;
		const { user } = this.props.authStore!;

		return (
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap className={classes.title}>
						TODO'SHER
					</Typography>
					{user && (
						<Typography variant="subtitle2" noWrap className={classes.hello}>
							Hello, {user.username}
						</Typography>
					)}
					{user && (
						<IconButton color="inherit" onClick={this.toggleDrawer}>
							<Icon name="account-circle" color="white" size="md" svgSize="lg" />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

const Header = withStyles(styles)(HeaderComponent);

export { Header };
