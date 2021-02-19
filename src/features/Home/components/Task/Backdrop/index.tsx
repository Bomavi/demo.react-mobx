import { FC, memo } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import Fade from '@material-ui/core/Fade';

import { useStyles } from './styles';

export interface BackdropProps {
	fadeIn: boolean;
	onClick?: () => void;
}

const Backdrop: FC<BackdropProps> = memo(({ fadeIn, onClick }) => {
	const classes = useStyles();

	return (
		<Fade in={fadeIn}>
			<ButtonBase disableRipple className={classes.backdrop} onClick={onClick} />
		</Fade>
	);
});

export { Backdrop };
