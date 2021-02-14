import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Router } from 'router';
import { useRootStore } from 'config/store';
import { Content } from 'views/layouts';

import { useStyles } from './styles';

const App: FC = observer(() => {
	const classes = useStyles();

	const {
		featureAuth: { isAuthenticated, selectedTheme, authenticate },
	} = useRootStore();

	useEffect(() => {
		if (!isAuthenticated) authenticate();
	}, [isAuthenticated, authenticate]);

	return (
		<ThemeProvider theme={selectedTheme}>
			<>
				<CssBaseline />
				<div className={classes.app}>
					<Content>
						<Router />
					</Content>
				</div>
			</>
		</ThemeProvider>
	);
});

export { App };
