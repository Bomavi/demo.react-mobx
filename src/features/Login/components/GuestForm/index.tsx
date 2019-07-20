/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/* root imports: view components */
import { Subtitle, LoginButton } from 'features/Login/components';

/* local imports: common */
import { styles } from './styles';

interface GuestFormProps extends WithStyles<typeof styles> {}

@observer
class GuestFormComponent extends React.Component<GuestFormProps> {
	@action public actionHandler = (value: string) => {
		console.warn('actionHandler: ', value);
	};

	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<Subtitle>Use Guest Access</Subtitle>
				<div className={classes.wrapper}>
					<LoginButton gradient="primary">Get access</LoginButton>
				</div>
			</Paper>
		);
	}
}

const GuestForm = withStyles(styles)(GuestFormComponent);

export { GuestForm };
