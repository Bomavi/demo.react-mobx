import React from 'react';

import { Icon } from 'views/elements';
import { SocialBarWrapper, IconWrapper } from './styles';

const SocialBar = (): JSX.Element => {
	return (
		<SocialBarWrapper>
			<IconWrapper>
				<Icon name="instagram" />
			</IconWrapper>
			<IconWrapper>
				<Icon name="instagram" />
			</IconWrapper>
			<IconWrapper>
				<Icon name="instagram" />
			</IconWrapper>
			<IconWrapper>
				<Icon name="instagram" />
			</IconWrapper>
			<IconWrapper>
				<Icon name="instagram" />
			</IconWrapper>
		</SocialBarWrapper>
	);
};

export { SocialBar };
