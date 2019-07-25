/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
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
		const { switchTheme, themeNameToSwitch } = this.props.authStore!;

		return (
			<ListItem button onClick={switchTheme}>
				<ListItemIcon>
					<Icon name="compare" svgSize="md" />
				</ListItemIcon>
				<ListItemText primary={`Switch to ${themeNameToSwitch} theme`} />
			</ListItem>
		);
	}
}

export { ThemeSwitcher };
