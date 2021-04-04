import { FC } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import GuestForm from './components/GuestForm';
import LoginForm from './components/LoginForm';
import { useStyles } from './styles';

const Login: FC = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="xs">
			<GuestForm />
			<Typography noWrap className={classes.typography} variant="h5" align="center">
				OR
			</Typography>
			<LoginForm />
		</Container>
	);
};

export default Login;
