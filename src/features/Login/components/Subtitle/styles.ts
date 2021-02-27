import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((_theme) =>
	createStyles({
		subtitle: {
			marginBottom: 20,
			textTransform: 'uppercase',
		},
	})
);
