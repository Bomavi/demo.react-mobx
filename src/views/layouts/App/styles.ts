import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((_theme) =>
	createStyles({
		app: {
			position: 'relative',
			width: '100%',
			minHeight: '100vh',
			fontFamily: 'Roboto, sans-serif',
		},
	})
);
