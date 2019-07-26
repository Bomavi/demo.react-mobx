/* npm imports: common */
import React from 'react';
import { Provider, inject, observer } from 'mobx-react';

/* npm imports: material-ui/core */
import Container from '@material-ui/core/Container';

/* local imports: common */
import { ActionTabs, TaskList } from './components';
import { homeStore, HomeStore } from './store';

interface HomePageProps {
	store?: HomeStore;
}

@inject('store')
@observer
class HomePage extends React.Component<HomePageProps> {
	public componentDidMount() {
		this.props.store!.searchTasks();
	}

	public render() {
		return (
			<Container maxWidth="md">
				<ActionTabs />
				<TaskList />
			</Container>
		);
	}
}

export const Home = () => (
	<Provider store={homeStore}>
		<HomePage />
	</Provider>
);
