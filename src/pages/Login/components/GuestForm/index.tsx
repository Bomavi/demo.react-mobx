import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Paper from '@material-ui/core/Paper';

import { useAuthStore } from '../../store';
import Subtitle from '../Subtitle';
import LoginButton from '../LoginButton';

import { useStyles } from './styles';

const GuestForm: FC = () => {
	const classes = useStyles();

	const { login } = useAuthStore();

	const loginHandler = () => {
		login({ isGuest: true });
	};

	return (
		<Paper className={classes.paper}>
			<Subtitle>Use Guest Access</Subtitle>
			<div className={classes.wrapper}>
				<LoginButton gradient="primary" onClick={loginHandler}>
					Get access
				</LoginButton>
			</div>
		</Paper>
	);
};

export default observer(GuestForm);
