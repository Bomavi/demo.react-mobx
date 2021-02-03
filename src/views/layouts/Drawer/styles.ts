/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme): Record<string, any> =>
	createStyles({
		toolbar: theme.mixins.toolbar,
	});
