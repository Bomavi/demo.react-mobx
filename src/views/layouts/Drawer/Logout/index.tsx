/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/* root imports: view components */
import { Icon } from 'views/elements';

/* root imports: common */
import { AuthStore } from 'features/Login/store';

interface LogoutProps {
	authStore?: AuthStore;
}

@inject('authStore')
@observer
class Logout extends React.Component<LogoutProps> {
	@observable public isDrawerOpen: boolean = false;

	@action public logoutHandler = () => {
		this.props.authStore!.logout();
	};

	public render() {
		return (
			<ListItem button onClick={this.logoutHandler}>
				<ListItemIcon>
					<Icon name="logout-variant" svgSize="md" />
				</ListItemIcon>
				<ListItemText primary="Logout" />
			</ListItem>
		);
	}
}

export { Logout };
