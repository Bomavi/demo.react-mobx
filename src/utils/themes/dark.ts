/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

/* local imports: common */
import { themeWithOverrides } from './overrides';

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#00796b',
		},
		secondary: {
			main: '#e64a19',
		},
	},
	overrides: themeWithOverrides.overrides,
});

export { darkTheme };
