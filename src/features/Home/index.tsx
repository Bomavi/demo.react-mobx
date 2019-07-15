/* npm imports: common */
import React from 'react';
import { Provider, observer, inject } from 'mobx-react';
import styled from 'styled-components';

/* local imports: common */
import { homeStore, HomeStore } from './store';

const PageWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

interface HomePageProps {
	store?: HomeStore;
}

@inject('store')
@observer
class HomePage extends React.Component<HomePageProps> {
	public render() {
		// const { name } = this.props.store!;
		return (
			<PageWrapper>
				<h1>Home Page</h1>
			</PageWrapper>
		);
	}
}

export const Home = () => (
	<Provider store={homeStore}>
		<HomePage />
	</Provider>
);
