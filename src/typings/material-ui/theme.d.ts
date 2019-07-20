interface Gradietns {
	primary: string;
	secondary: string;
}

declare global {
	declare module '@material-ui/core/styles/createMuiTheme' {
		interface Theme {
			gradients: Gradietns;
		}
		// allow configuration using `createMuiTheme`
		interface ThemeOptions {
			gradients: Gradietns;
		}
	}
}
