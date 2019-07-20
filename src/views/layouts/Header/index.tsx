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

/* local imports: common */
import { styles } from './styles';

interface HeaderProps extends WithStyles<typeof styles> {
	globalStore?: GlobalStore;
}

@inject('globalStore')
@observer
class HeaderComponent extends React.Component<HeaderProps> {
	public render() {
		const { classes } = this.props;
		const { toggleDrawer } = this.props.globalStore!;

		return (
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap className={classes.title}>
						TODO'SHER
					</Typography>
					<Typography variant="subtitle2" noWrap className={classes.hello}>
						Hello, Bomav1
					</Typography>
					<IconButton color="inherit" onClick={toggleDrawer}>
						<Icon name="account-circle" color="white" size="md" svgSize="lg" />
					</IconButton>
				</Toolbar>
			</AppBar>
		);
	}
}

const Header = withStyles(styles)(HeaderComponent);

export { Header };
