import { FC } from 'react';

import Container from '@material-ui/core/Container';

import { ActionTabs, TaskList } from './components';

const Home: FC = () => (
	<Container maxWidth="md">
		<ActionTabs />
		<TaskList />
	</Container>
);

export { Home };
