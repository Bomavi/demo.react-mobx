/* npm imports: common */
import React from 'react';
import { Provider } from 'mobx-react';

/* npm imports: material-ui/core */
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

/* local imports: common */
import { GuestForm, LoginForm } from './components';
import { authStore } from './store';
import { useStyles } from './styles';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xs">
			<GuestForm />
			<Typography className={classes.typography} noWrap variant="h5" align="center">
				OR
			</Typography>
			<LoginForm />
		</Container>
	);
};

export const Login = () => (
	<Provider store={authStore}>
		<LoginPage />
	</Provider>
);
