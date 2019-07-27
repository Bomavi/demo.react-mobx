/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { AuthStore } from 'features/Login/store';

interface ThemeSwitcherProps {
	authStore?: AuthStore;
}

@inject('authStore')
@observer
class ThemeSwitcher extends React.Component<ThemeSwitcherProps> {
	public render() {
		const { user, switchTheme, themeNameToSwitch } = this.props.authStore!;

		return (
			<ListItem button onClick={switchTheme}>
				<ListItemIcon>
					{user!.switchThemeInProgress ? (
						<CircularProgress size={18} thickness={4} color="inherit" />
					) : (
						<Icon name="compare" svgSize="md" />
					)}
				</ListItemIcon>
				<ListItemText primary={`Switch to ${themeNameToSwitch} theme`} />
			</ListItem>
		);
	}
}

export { ThemeSwitcher };
