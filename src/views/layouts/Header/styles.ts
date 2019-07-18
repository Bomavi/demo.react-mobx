/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		title: {
			flexGrow: 1,
		},
		appBar: {
			flexGrow: 1,
			zIndex: theme.zIndex.drawer + 1,
		},
	});
