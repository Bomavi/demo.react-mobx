/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';

/* root imports: view components */
import { DrawerItem } from 'views/layouts/Drawer/DrawerItem';

/* root imports: common */
import { AuthStore } from 'features/Login/store';

interface LogoutProps {
	authStore?: AuthStore;
}

@inject('authStore')
@observer
class Logout extends React.Component<LogoutProps> {
	public render() {
		const { inProgress, logout } = this.props.authStore!;

		return (
			<DrawerItem
				text="Logout"
				iconName="logout-variant"
				inProgress={inProgress}
				onClick={logout}
			/>
		);
	}
}

export { Logout };
