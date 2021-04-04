import { FC } from 'react';

import Container from '@material-ui/core/Container';

import ActionTabs from './components/ActionTabs';
import TaskList from './components/TaskList';

const Home: FC = () => (
	<Container maxWidth="md">
		<ActionTabs />
		<TaskList />
	</Container>
);

export default Home;
