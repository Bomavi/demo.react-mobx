/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			width: '100%',
			height: 60,
			backgroundColor: theme.palette.background.default,
			borderRadius: 4,
		},
		icon: {
			display: 'flex',
			width: 60,
			height: 60,
			justifyContent: 'center',
			alignItems: 'center',
		},
		button: {
			'&:disabled': {
				'& svg': {
					fill: theme.palette.text.disabled,
				},
			},
		},
		input: {
			flexGrow: 1,
			height: 60,
			padding: '0 20px',
		},
		divider: {
			width: 1,
			height: 30,
			margin: '15px 0',
		},
	});
