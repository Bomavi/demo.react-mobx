/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (_theme: Theme): Record<string, any> =>
	createStyles({
		app: {
			position: 'relative',
			width: '100%',
			minHeight: '100vh',
			fontFamily: 'Roboto, sans-serif',
		},
	});
