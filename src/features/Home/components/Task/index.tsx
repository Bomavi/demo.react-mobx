/* npm imports: common */
import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
import cx from 'classnames';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { TaskCheckbox, TaskActions } from 'features/Home/components';

/* root imports: common */
import { HomeStore } from 'features/Home/store';
import { TaskModel } from 'features/Home/task.model';

/* local imports: common */
import { Description } from './Description';
import { EditInput } from './EditInput';
import { Backdrop } from './Backdrop';
import { styles } from './styles';

export interface TaskProps extends WithStyles<typeof styles> {
	store?: HomeStore;
	task: TaskModel;
	isLastChild: boolean;
}

@inject('store')
@observer
class TaskComponent extends Component<TaskProps> {
	@observable private isHovered: boolean = false;
	@observable private isEditable: boolean = false;

	@action private mouseEnterHandler = () => {
		this.isHovered = true;
	};

	@action private mouseLeaveHandler = () => {
		this.isHovered = false;
	};

	@action private editHandler = () => {
		this.isEditable = !this.isEditable;
		this.mouseLeaveHandler();
	};

	private completeHandler = () => {
		const { task } = this.props;
		task.setActionInProgress('updateInProgress', true);
		this.props.store!.updateTask(task.id, { ...task, completed: !task.completed });
		this.mouseLeaveHandler();
	};

	private saveHandler = (value: string) => {
		const { task } = this.props;
		task.setActionInProgress('updateInProgress', true);
		this.props.store!.updateTask(task.id, { ...task, description: value });
	};

	private deleteHandler = () => {
		const { task } = this.props;
		task.setActionInProgress('deleteInProgress', true);
		this.props.store!.deleteTask(task.id);
	};

	public render() {
		const { classes, task, isLastChild = false } = this.props;

		return (
			<div
				className={cx(classes.root, { isLastChild })}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
			>
				<TaskCheckbox
					value={task.completed}
					isFetching={task.updateInProgress}
					onChange={this.completeHandler}
				/>
				<Divider className={classes.divider} />
				<Description completed={task.completed}>{task.description}</Description>
				{this.isHovered && !task.deleteInProgress && (
					<Divider className={classes.divider} />
				)}
				{(this.isHovered || task.deleteInProgress) && (
					<TaskActions
						onEdit={this.editHandler}
						isFetching={task.deleteInProgress}
						onDelete={this.deleteHandler}
					/>
				)}
				<Backdrop fadeIn={this.isEditable} onClick={this.editHandler} />
				{this.isEditable && (
					<EditInput
						autoFocus
						isFetching={task.updateInProgress}
						defaultValue={task.description}
						onClick={this.saveHandler}
						onCancel={this.editHandler}
					/>
				)}
			</div>
		);
	}
}

const Task = withStyles(styles)(TaskComponent);

export { Task };
