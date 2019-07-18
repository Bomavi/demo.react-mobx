/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* local imports: common */
import { styles } from './styles';

interface AddTaskProps extends WithStyles<typeof styles> {}

@observer
class AddTaskComponent extends React.Component<AddTaskProps> {
	@action public actionHandler = (value: string) => {
		console.warn('actionHandler: ', value);
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