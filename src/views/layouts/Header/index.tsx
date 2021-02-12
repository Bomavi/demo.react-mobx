import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { Icon } from 'views/elements';
import { useRootStore, useUiStore } from 'config/store';

import { useStyles } from './styles';

const Header: FC = observer(() => {
	const classes = useStyles();

	const { toggleDrawer } = useUiStore();

	const {
		featureAuth: { user },
	} = useRootStore();

	const toggleDrawerHandler = () => {
		toggleDrawer();
	};

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
					<IconButton color="inherit" onClick={toggleDrawerHandler}>
						<Icon
							name="account-circle"
							color="white"
							size="md"
							svgSize="lg"
						/>
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
});

export { Header };
