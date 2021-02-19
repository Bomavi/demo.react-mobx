import { FC, memo } from 'react';
import cx from 'classnames';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

export interface DescriptionProps {
	completed: boolean;
}

const Description: FC<DescriptionProps> = memo(({ children, completed }) => {
	const classes = useStyles();

	return (
		<Typography
			className={cx(classes.typography, { completed })}
			title={String(children)}
			noWrap
			variant="body1"
		>
			{children}
		</Typography>
	);
});

export { Description };
