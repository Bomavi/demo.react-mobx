/* npm imports: material-ui/core */
import { createMuiTheme } from '@material-ui/core/styles';

const drawerWidth = 300;

/* usage: { overrides: themeWithOverrides.overrides } */
export const themeWithOverrides = createMuiTheme({
	overrides: {
		MuiDrawer: {
			root: {
				width: drawerWidth,
			},
			docked: {
				width: drawerWidth,
			},
			paper: {
				width: drawerWidth,
			},
		},
	},
});
