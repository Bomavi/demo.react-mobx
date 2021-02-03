/* npm imports: common */
import { Component } from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

/* root imports: common */
import { GlobalStore } from 'config/global-store';
import { AuthStore } from 'features/Login/store';

/* local imports: common */
import { styles } from './styles';
import { DrawerItem } from './DrawerItem';

interface DrawerProps extends WithStyles<typeof styles> {
	globalStore?: GlobalStore;
	authStore?: AuthStore;
}

@inject('globalStore', 'authStore')
@observer
class DrawerComponent extends Component<DrawerProps> {
	public componentWillUnmount() {
		this.hideDrawer();
	}

	private hideDrawer = () => {
		this.props.globalStore!.toggleDrawer(false);
	};

	public render() {
		const { classes } = this.props;
		const { isDrawerOpen } = this.props.globalStore!;
		const {
			switchTheme,
			themeNameToSwitch,
			user,
			inProgress,
			logout,
		} = this.props.authStore!;

		return (
			<MUIDrawer anchor="right" variant="persistent" open={isDrawerOpen}>
				<div className={classes.toolbar} />
				<List>
					<DrawerItem
						text={`Switch to ${themeNameToSwitch} theme`}
						iconName="compare"
						inProgress={user!.switchThemeInProgress}
						onClick={switchTheme}
					/>
				</List>
				<Divider />
				<List>
					<DrawerItem
						text="Logout"
						iconName="logout-variant"
						inProgress={inProgress}
						onClick={logout}
					/>
				</List>
			</MUIDrawer>
		);
	}
}

const Drawer = withStyles(styles)(DrawerComponent);

export { Drawer };
