/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			width: 100,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		iconButton: {
			'&:disabled': {
				'& svg': {
					fill: theme.palette.text.disabled,
				},
			},
		},
		delete: {
			'& svg': {
				fill: theme.palette.secondary.main,
			},
		},
		iconButtonWrapper: {
			display: 'flex',
			width: 40,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
);
