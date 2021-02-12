import { FC, useState, useEffect, useMemo, ReactElement } from 'react';
import { observer } from 'mobx-react-lite';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Content } from 'views/layouts';
import { Home } from 'features/Home';
import { Login } from 'features/Login';

import { useRouterStore } from 'config/router';
import { useRootStore } from 'config/store';

import { useStyles } from './styles';

const App: FC = observer(() => {
	const classes = useStyles();

	const { current } = useRouterStore();
	const {
		featureAuth: { isAuthenticated, selectedTheme, authenticate },
	} = useRootStore();

	const [component, setComponent] = useState<ReactElement | null>(null);

	useEffect(() => {
		authenticate();
	}, [authenticate]);

	useEffect(() => {
		if (current) {
			switch (current.name) {
				case 'home':
					setComponent(<Home />);
					break;
				case 'login':
					setComponent(<Login />);
					break;
				default:
					setComponent(<h1>Page 404</h1>);
					break;
			}
		}
	}, [current]);

	const whileNotAuthenticated = useMemo(
		() => !isAuthenticated && current && current.name !== 'login',
		[current, isAuthenticated]
	);

	if (current === null) return null;

	return (
		<ThemeProvider theme={selectedTheme}>
			<>
				<CssBaseline />
				<div className={classes.app}>
					<Content>{!whileNotAuthenticated && component}</Content>
				</div>
			</>
		</ThemeProvider>
	);
});

export { App };
