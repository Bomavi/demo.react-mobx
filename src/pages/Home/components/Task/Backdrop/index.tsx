import { FC, memo } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import Fade from '@material-ui/core/Fade';

import { useStyles } from './styles';

interface Props {
	fadeIn: boolean;
	onClick?: () => void;
}

const Backdrop: FC<Props> = ({ fadeIn, onClick }) => {
	const classes = useStyles();

	return (
		<Fade in={fadeIn}>
			<ButtonBase disableRipple className={classes.backdrop} onClick={onClick} />
		</Fade>
	);
};

export default memo(Backdrop);
