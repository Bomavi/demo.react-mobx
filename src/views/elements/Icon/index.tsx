/* npm imports: common */
import React, { Suspense } from 'react';
import cx from 'classnames';

/* root imports: common */
import FQ from 'assets/icons/file-question';

/* local imports: common */
import { useStyles, IconParams } from './styles';

export type IconName = 'settings' | 'file-question' | 'theme-light-dark';

interface IconProps {
	name: IconName;
}

const Icon: React.FC<IconProps & IconParams> = ({ name, size = 'md', color }) => {
	const SVG = React.lazy(() => import(`assets/icons/${name}`));
	const classes = useStyles({ color });

	return (
		<div className={cx(classes.iconWrapper, size)}>
			<div className={classes.svgWrapper}>
				<Suspense fallback={<FQ />}>
					<SVG />
				</Suspense>
			</div>
		</div>
	);
};

export { Icon };
