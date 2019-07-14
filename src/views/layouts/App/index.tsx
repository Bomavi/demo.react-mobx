import React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { ThemeProvider } from 'styled-components';

import { Header, Content, Footer } from 'views/layouts';
import { Home } from 'features/Home';

import { RouterStore } from 'utils/services/router';
import { GlobalStore } from 'config/store';
import { theme } from 'utils/themes';

import bg from 'assets/images/notebook.png';

interface AppWrapperProps {
	background?: string;
}

const AppWrapper = styled.div<AppWrapperProps>`
	position: relative;
	width: 100vw;
	min-height: 100vh;
	font-family: 'Roboto', sans-serif;
	background-image: url(${p => p.background});
	background-repeat: repeat;
`;

interface AppProps {
	routerStore?: RouterStore;
	globalStore?: GlobalStore;
}

@inject('routerStore')
@inject('globalStore')
@observer
class App extends React.Component<AppProps> {
	public render(): React.ReactNode {
		const { current } = this.props.routerStore!;
		const { isLight } = this.props.globalStore!;

		if (current === null) return null;

		let component = null;
		switch (current.name) {
			case 'home':
				component = <Home />;
				break;
			default:
				component = <h1>Page 404</h1>;
				break;
		}

		return (
			<ThemeProvider theme={theme(isLight)}>
				<AppWrapper background={bg}>
					<Header />
					<Content>{component}</Content>
					<Footer />
				</AppWrapper>
			</ThemeProvider>
		);
	}
}

export { App };
