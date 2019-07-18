/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { TaskCheckbox, TaskActions } from 'features/Home/components';

/* local imports: common */
import { Description } from './Description';
import { EditInput } from './EditInput';
import { Backdrop } from './Backdrop';
import { styles } from './styles';

export interface TaskProps extends WithStyles<typeof styles> {
	task: any;
}

@observer
class TaskComponent extends React.Component<TaskProps> {
	@observable private isHovered: boolean = false;
	@observable private isEditable: boolean = false;
	@observable private isComplete: boolean = false;

	@action private completeHandler = () => {
		this.isComplete = !this.isComplete;
	};

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

	private saveHandler = (value: string) => {
		console.warn('saveHandler: ', value);
	};

	public render() {
		const { classes, task } = this.props;

		return (
			<div
				className={classes.root}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
			>
				<TaskCheckbox value={this.isComplete} onChange={this.completeHandler} />
				<Divider className={classes.divider} />
				<Description>{task.description}</Description>
				{this.isHovered && <Divider className={classes.divider} />}
				{this.isHovered && <TaskActions onEdit={this.editHandler} />}
				<Backdrop fadeIn={this.isEditable} onClick={this.editHandler} />
				{this.isEditable && (
					<EditInput
						autoFocus
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
