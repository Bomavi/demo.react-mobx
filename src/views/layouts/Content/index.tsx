import React from 'react';

import { ContentWrapper } from './styles';

const Content: React.FC = ({ children }): JSX.Element => {
	return <ContentWrapper>{children}</ContentWrapper>;
};

export { Content };
