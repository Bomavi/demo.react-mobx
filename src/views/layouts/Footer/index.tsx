import React from 'react';

import { SocialBar } from 'views/layouts';
import { FooterWrapper } from './styles';

const Footer = (): JSX.Element => {
	return (
		<FooterWrapper>
			<SocialBar />
		</FooterWrapper>
	);
};

export { Footer };
