import { FC } from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const Subtitle: FC = ({ children }) => {
	const classes = useStyles();

	return (
		<Typography
			className={classes.subtitle}
			noWrap
			variant="subtitle2"
			align="center"
		>
			{children}
		</Typography>
	);
};

export default Subtitle;
