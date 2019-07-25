/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { GlobalStore } from 'config/global-store';

/* local imports: common */
import { styles } from './styles';
import { Logout } from './Logout';

interface DrawerProps extends WithStyles<typeof styles> {
	globalStore?: GlobalStore;
}

@inject('globalStore')
@observer
class DrawerComponent extends React.Component<DrawerProps> {
	public componentWillUnmount() {
		this.hideDrawer();
	}

	private hideDrawer = () => {
		const { toggleDrawer } = this.props.globalStore!;
		toggleDrawer(false);
	};

	public render() {
		const { classes } = this.props;
		const { switchTheme, themeNameToSwitch, isDrawerOpen } = this.props.globalStore!;

		return (
			<MUIDrawer anchor="right" variant="persistent" open={isDrawerOpen}>
				<div className={classes.toolbar} />
				<List>
					<ListItem button onClick={switchTheme}>
						<ListItemIcon>
							<Icon name="compare" svgSize="md" />
						</ListItemIcon>
						<ListItemText primary={`Switch to ${themeNameToSwitch} theme`} />
					</ListItem>
				</List>
				<Divider />
				<List>
					<Logout />
				</List>
			</MUIDrawer>
		);
	}
}

const Drawer = withStyles(styles)(DrawerComponent);

export { Drawer };
