import React, { Suspense } from 'react';
// import cx from 'classnames';
import FQ from 'assets/icons/file-question';
import { StyledWrapper } from './styles';

// const reqSvgs = require.context('assets/icons', true, /\.svg$/);
// const paths = reqSvgs.keys();
// const svgs = paths.map(p => p.substring(2, p.length - 4));

interface IconProps {
	name: 'instagram' | 'file-question';
}

export class Icon extends React.Component<IconProps> {
	public render(): React.ReactNode {
		const { name } = this.props;
		const SVG = React.lazy(() => import(`assets/icons/${name}`));

		return (
			<StyledWrapper>
				<Suspense fallback={<FQ />}>
					<SVG />
				</Suspense>
			</StyledWrapper>
		);
	}
}
