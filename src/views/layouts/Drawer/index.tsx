import { FC, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { useRootStore, useUiStore } from 'config/store';

import { DrawerItem } from './DrawerItem';
import { useStyles } from './styles';

const Drawer: FC = observer(() => {
	const classes = useStyles();

	const { isDrawerOpen, toggleDrawer } = useUiStore();

	const {
		featureAuth: { switchTheme, themeNameToSwitch, user, inProgress, logout },
	} = useRootStore();

	const hideDrawer = useCallback(() => {
		toggleDrawer(false);
	}, [toggleDrawer]);

	useEffect(() => {
		return () => {
			hideDrawer();
		};
	}, [hideDrawer]);

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
});

export { Drawer };
