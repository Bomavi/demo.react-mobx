/* npm imports: material-ui/core */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface IconParams {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
	color?: 'white' | 'black';
}

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		svgWrapper: (p: IconParams) => ({
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			display: 'block',
			'& svg': {
				display: 'block',
				fill: p.color ? p.color : theme.palette.text.primary,
			},
		}),
		iconWrapper: {
			display: 'flex',
			position: 'relative',
			'&.xs': {
				width: 14,
				height: 14,
			},
			'&.sm': {
				width: 18,
				height: 18,
			},
			'&.md': {
				width: 26,
				height: 26,
			},
			'&.lg': {
				width: 36,
				height: 36,
			},
			'&.xl': {
				width: 48,
				height: 48,
			},
			'&.xxl': {
				width: 56,
				height: 56,
			},
		},
	})
);
