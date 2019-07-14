export interface ThemeBase {
	colors: {
		white: string;
		gray: string;
		black: string;
	};

	primaryColor: string;
	secondaryColor: string;

	primaryTextColor: string;
	secondaryTextColor: string;
}

export const theme = (isLight: boolean): ThemeBase => {
    const white = '#f1f1f1';
    const gray = '#4a4a4a';
    const black = '#222';

    return {
        colors: {
            white,
            gray,
            black,
        },

        primaryColor: white,
        secondaryColor: gray,

        primaryTextColor: black,
        secondaryTextColor: white,
    };
};
