/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

/* local imports: common */
import { themeWithOverrides } from './overrides';

const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#26a69a',
		},
		secondary: {
			main: '#ff5722',
		},
	},
	overrides: themeWithOverrides.overrides,
});

export { lightTheme };
