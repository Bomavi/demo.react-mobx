import React from 'react';

import { Logo, NavBar } from 'views/layouts';
import { HeaderWrapper } from './styles';

class Header extends React.Component<{}> {
	public render(): React.ReactNode {
		return (
			<HeaderWrapper>
				<Logo />
				<NavBar />
			</HeaderWrapper>
		);
	}
}

export { Header };
