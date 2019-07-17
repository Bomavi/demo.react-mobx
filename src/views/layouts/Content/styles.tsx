/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			width: '100%',
			padding: '30px 0',
		},
		toolbar: theme.mixins.toolbar,
	})
);
