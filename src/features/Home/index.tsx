/* npm imports: common */
import React from 'react';
import { Provider } from 'mobx-react';

/* npm imports: material-ui/core */
import Container from '@material-ui/core/Container';

/* local imports: common */
import { ActionTabs, TaskList } from './components';
import { homeStore } from './store';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => (
	<Container maxWidth="md">
		<ActionTabs />
		<TaskList />
	</Container>
);

export const Home = () => (
	<Provider store={homeStore}>
		<HomePage />
	</Provider>
);
