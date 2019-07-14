import React from 'react';
import { Provider, observer, inject } from 'mobx-react';
import styled from 'styled-components';

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
    public render(): React.ReactNode {
        // const { name } = this.props.store!;
        return (
            <PageWrapper>
                <h1>Home Page</h1>
            </PageWrapper>
        );
    }
}

export const Home = (): JSX.Element => (
    <Provider store={homeStore}>
        <HomePage />
    </Provider>
);
