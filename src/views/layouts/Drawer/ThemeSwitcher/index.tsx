/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* root imports: view components */
import { DrawerItem } from 'views/layouts/Drawer/DrawerItem';

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
			<DrawerItem
				text={`Switch to ${themeNameToSwitch} theme`}
				iconName="compare"
				inProgress={user!.switchThemeInProgress}
				onClick={switchTheme}
			/>
		);
	}
}

export { ThemeSwitcher };
