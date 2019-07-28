/* npm imports: common */
import React from 'react';
import { inject, observer } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* root imports: view components */
import { Task } from 'features/Home/components';

/* root imports: common */
import { HomeStore } from 'features/Home/store';

/* local imports: common */
import { styles } from './styles';

interface TaskListProps extends WithStyles<typeof styles> {
	store?: HomeStore;
}

@inject('store')
@observer
class TaskListComponent extends React.Component<TaskListProps> {
	public render() {
		const { classes } = this.props;
		const { taskList, isEmpty } = this.props.store!;

		return (
			<Paper className={classes.root}>
				<Typography className={classes.title} noWrap variant="subtitle2">
					Task List
				</Typography>
				{!isEmpty
					? taskList.map(task => <Task key={task.id} task={task} />)
					: 'No tasks found!'}
			</Paper>
		);
	}
}

const TaskList = withStyles(styles)(TaskListComponent);

export { TaskList };
