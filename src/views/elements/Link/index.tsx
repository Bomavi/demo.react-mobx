import React from 'react';
import cx from 'classnames';

import router from 'utils/services/router';
import { LinkWrapper } from './styles';

interface LinkProps {
	name: string;
	block?: boolean;
	params?: object;
	options?: {
		reload?: boolean;
		refresh?: boolean;
	};
}

class Link extends React.Component<LinkProps> {
	protected static defaultProps = {
		block: false,
		options: {},
		params: {},
	};

	private handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
		const { name, params, options } = this.props;
		const comboKey = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

		if (event.button === 0 && !comboKey) {
			event.preventDefault();
			router.navigate(name, params as any, options as any);
		}
	};

	public render(): React.ReactNode {
		const { children, name, block, params } = this.props;
		const href = router.buildPath(name, params as any);

		if (href === null) console.error("<Link> Couldn't make URL for", name, params);

		return (
			<LinkWrapper
				href={href}
				className={cx({ block, active: router.isActive(name) })}
				onClick={this.handleClick}
			>
				<div className="icon-wrapper">{children}</div>
			</LinkWrapper>
		);
	}
}

export { Link };
