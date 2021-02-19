import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((_theme) =>
	createStyles({
		backdrop: {
			position: 'fixed',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0,0,0, 0.4)',
			zIndex: 2,
		},
	})
);
