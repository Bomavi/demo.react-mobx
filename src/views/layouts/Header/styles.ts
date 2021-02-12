import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
	createStyles({
		appBar: {
			flexGrow: 1,
			zIndex: theme.zIndex.drawer + 1,
		},
		title: {
			flexGrow: 1,
		},
		hello: {
			marginRight: 10,
		},
	})
);
