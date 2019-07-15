/* npm imports: common */
import React from 'react';

/* root imports: view components */
import { Header, Footer, Drawer } from 'views/layouts';

/* local imports: common */
import { ContentWrapper } from './styles';

const Content: React.FC = ({ children }) => {
	return (
		<ContentWrapper>
			<Header />
			<Drawer />
			{children}
			<Footer />
		</ContentWrapper>
	);
};

export { Content };
