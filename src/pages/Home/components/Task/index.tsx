import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cx from 'classnames';

import Divider from '@material-ui/core/Divider';

import { useHomeStore } from '../../store';
import { TaskModel } from '../../store/task.model';
import TaskCheckbox from '../TaskCheckbox';
import TaskActions from '../TaskActions';

import Description from './Description';
import EditInput from './EditInput';
import Backdrop from './Backdrop';
import { useStyles } from './styles';

interface Props {
	task: TaskModel;
	isLastChild: boolean;
}

const Task: FC<Props> = ({ task, isLastChild = false }) => {
	const classes = useStyles();

	const [isHovered, setIsHovered] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	const { updateTask, deleteTask } = useHomeStore();

	const mouseEnterHandler = () => {
		setIsHovered(true);
	};

	const mouseLeaveHandler = () => {
		setIsHovered(false);
	};

	const editHandler = () => {
		setIsEditable(!isEditable);
		mouseLeaveHandler();
	};

	const completeHandler = () => {
		task.setActionInProgress('updateInProgress', true);
		updateTask(task.id, { ...task, completed: !task.completed });
		mouseLeaveHandler();
	};

	const saveHandler = (value: string) => {
		task.setActionInProgress('updateInProgress', true);
		updateTask(task.id, { ...task, description: value });
	};

	const deleteHandler = () => {
		task.setActionInProgress('deleteInProgress', true);
		deleteTask(task.id);
	};

	return (
		<div
			className={cx(classes.root, { isLastChild })}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<TaskCheckbox
				value={task.completed}
				isFetching={task.updateInProgress}
				onChange={completeHandler}
			/>
			<Divider className={classes.divider} />
			<Description completed={task.completed}>{task.description}</Description>
			{isHovered && !task.deleteInProgress && (
				<Divider className={classes.divider} />
			)}
			{(isHovered || task.deleteInProgress) && (
				<TaskActions
					onEdit={editHandler}
					isFetching={task.deleteInProgress}
					onDelete={deleteHandler}
				/>
			)}
			<Backdrop fadeIn={isEditable} onClick={editHandler} />
			{isEditable && (
				<EditInput
					autoFocus
					isFetching={task.updateInProgress}
					defaultValue={task.description}
					onClick={saveHandler}
					onCancel={editHandler}
				/>
			)}
		</div>
	);
};

export default observer(Task);
