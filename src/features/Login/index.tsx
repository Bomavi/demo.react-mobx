import { FC } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { GuestForm, LoginForm } from './components';
import { useStyles } from './styles';

const Login: FC = () => {
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

export { Login };
