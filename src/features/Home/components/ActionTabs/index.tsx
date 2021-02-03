/* npm imports: common */
import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* root imports: view components */
import { AddTask, Search } from 'features/Home/components';

/* local imports: common */
import { styles } from './styles';

interface ActionTabsProps extends WithStyles<typeof styles> {}

@observer
class ActionTabsComponent extends React.Component<ActionTabsProps> {
	@observable private tabIndex: number = 0;

	@action private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.tabIndex = value;
	};

	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				<Tabs
					value={this.tabIndex}
					onChange={this.tabClickHandler}
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab label="Add new task" />
					<Tab label="Search tasks" />
				</Tabs>
				<div className={classes.tabContent}>
					{this.tabIndex === 0 && <AddTask />}
					{this.tabIndex === 1 && <Search />}
				</div>
			</Paper>
		);
	}
}

const ActionTabs = withStyles(styles)(ActionTabsComponent);

export { ActionTabs };
