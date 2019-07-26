/* npm imports: common */
import React from 'react';
import { inject, observer } from 'mobx-react';
// import { action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { HomeStore } from 'features/Home/store';

/* local imports: common */
import { styles } from './styles';

interface AddTaskProps extends WithStyles<typeof styles> {
	store?: HomeStore;
}

@inject('store')
@observer
class AddTaskComponent extends React.Component<AddTaskProps> {
	public actionHandler = (value: string) => {
		this.props.store!.addTask({ description: value, completed: false });
	};

	public render() {
		// const { classes } = this.props;

		return (
			<CustomInput
				icon={{
					name: 'plus',
					svgSize: 'md',
				}}
				placeholder="Type task description..."
				onClick={this.actionHandler}
			/>
		);
	}
}

const AddTask = withStyles(styles)(AddTaskComponent);

export { AddTask };
