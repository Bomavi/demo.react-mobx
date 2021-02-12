import { FC } from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const Footer: FC = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography className={classes.title} noWrap variant="body1" align="center">
				Created by Maksym Bozhenov for DEMO purpose
			</Typography>
		</footer>
	);
};

export { Footer };
