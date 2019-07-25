/* npm imports: common */
import React from 'react';
import { inject, observer } from 'mobx-react';

/* npm imports: material-ui/core */
import { ThemeProvider } from '@material-ui/styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/* root imports: view components */
import { Content } from 'views/layouts';
import { Home } from 'features/Home';
import { Login } from 'features/Login';

/* root imports: common */
import { RouterStore } from 'config/router';
import { GlobalStore } from 'config/global-store';
import { AuthStore } from 'features/Login/store';

/* local imports: common */
import { styles } from './styles';

interface AppProps extends WithStyles<typeof styles> {
	routerStore?: RouterStore;
	globalStore?: GlobalStore;
	authStore?: AuthStore;
}

@inject('routerStore', 'globalStore', 'authStore')
@observer
class AppComponent extends React.Component<AppProps> {
	public async componentDidMount() {
		await this.props.authStore!.authenticate();
	}

	public render() {
		const { classes } = this.props;
		const { current } = this.props.routerStore!;
		const { isAuthenticated } = this.props.authStore!;
		const { selectedTheme } = this.props.globalStore!;

		if (current === null) return null;

		const whileNotAuthenticated = !isAuthenticated && current.name !== 'login';

		let component = null;
		switch (current.name) {
			case 'home':
				component = <Home />;
				break;
			case 'login':
				component = <Login />;
				break;
			default:
				component = <h1>Page 404</h1>;
				break;
		}

		return (
			<ThemeProvider theme={selectedTheme}>
				<>
					<CssBaseline />
					<div className={classes.root}>
						<Content>{!whileNotAuthenticated && component}</Content>
					</div>
				</>
			</ThemeProvider>
		);
	}
}

const App = withStyles(styles)(AppComponent);

export { App };
