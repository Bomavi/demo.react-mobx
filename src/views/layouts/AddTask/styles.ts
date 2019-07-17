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
	});
