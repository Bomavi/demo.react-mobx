import { FC, useState, ChangeEvent } from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AddTask from '../AddTask';
import Search from '../Search';

import { useStyles } from './styles';

const ActionTabs: FC = () => {
	const classes = useStyles();

	const [tabIndex, setTabIndex] = useState(0);

	const tabClickHandler = (_e: ChangeEvent<Record<string, never>>, value: number) => {
		setTabIndex(value);
	};

	return (
		<Paper className={classes.root}>
			<Tabs
				value={tabIndex}
				onChange={tabClickHandler}
				indicatorColor="primary"
				textColor="primary"
			>
				<Tab label="Add new task" />
				<Tab label="Search tasks" />
			</Tabs>
			<div className={classes.tabContent}>
				{tabIndex === 0 && <AddTask />}
				{tabIndex === 1 && <Search />}
			</div>
		</Paper>
	);
};

export default ActionTabs;
