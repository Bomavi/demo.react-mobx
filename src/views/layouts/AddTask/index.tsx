/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { Icon, CustomInput } from 'views/elements';

/* local imports: common */
import { styles } from './styles';

interface AddTaskProps extends WithStyles<typeof styles> {}

@observer
class AddTaskComponent extends React.Component<AddTaskProps> {
	@observable private tabIndex: number = 0;

	@action private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.tabIndex = value;
	};

	@action public actionHandler = (value: string) => {
		console.warn('actionHandler: ', value);
	};

	public render() {
		// const { classes } = this.props;

		return (
			<CustomInput placeholder="Add task here..." onClick={this.actionHandler}>
				<Icon name="plus" size="md" />
			</CustomInput>
		);
	}
}

const AddTask = withStyles(styles)(AddTaskComponent);

export { AddTask };
