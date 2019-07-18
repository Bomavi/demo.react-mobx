/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
// import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* root imports: view components */
import { Task } from 'views/layouts';

/* local imports: common */
import { styles } from './styles';

interface TaskListProps extends WithStyles<typeof styles> {}

@observer
class TaskListComponent extends React.Component<TaskListProps> {
	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root}>
				<Typography className={classes.title} noWrap variant="subtitle2">
					Task List
				</Typography>
				<Task task={{ description: 'Task num. 1' }} />
				<Task task={{ description: 'Task num. 2' }} />
			</Paper>
		);
	}
}

const TaskList = withStyles(styles)(TaskListComponent);

export { TaskList };
