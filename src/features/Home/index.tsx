/* npm imports: common */
import React from 'react';
import { Provider, observer, inject } from 'mobx-react';

/* root imports: view components */
import { ActionTabs, TaskList } from 'views/layouts';

/* local imports: common */
import { homeStore, HomeStore } from './store';

interface HomePageProps {
	store?: HomeStore;
}

@inject('store')
@observer
class HomePage extends React.Component<HomePageProps> {
	public render() {
		// const { name } = this.props.store!;
		return (
			<div>
				<ActionTabs />
				<TaskList />
			</div>
		);
	}
}

export const Home = () => (
	<Provider store={homeStore}>
		<HomePage />
	</Provider>
);
