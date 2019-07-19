/* npm imports: common */
import React, { Suspense } from 'react';
import cx from 'classnames';

/* root imports: common */
import FQ from 'assets/icons/file-question';

/* local imports: common */
import { useStyles, IconParams } from './styles';

export type IconName =
	| 'settings'
	| 'file-question'
	| 'theme-light-dark'
	| 'pencil'
	| 'account-circle'
	| 'delete'
	| 'grab'
	| 'magnify'
	| 'close'
	| 'plus'
	| 'check'
	| 'check-bold'
	| 'compare'
	| 'account'
	| 'login-variant'
	| 'logout-variant'
	| 'textbox-password'
	| 'eye-off-outline'
	| 'eye-outline'
	| 'help'
	| 'help-rhombus-outline';

export interface IconProps extends IconParams {
	name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, size = 'sm', svgSize = 'sm', color }) => {
	const SVG = React.lazy(() => import(`assets/icons/${name}`));
	const classes = useStyles({ color });

	return (
		<div className={cx(classes.iconWrapper, size)}>
			<div className={cx(classes.svgWrapper, svgSize)}>
				<Suspense fallback={<FQ />}>
					<SVG />
				</Suspense>
			</div>
		</div>
	);
};

export { Icon };
