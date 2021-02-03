/* npm imports: common */
import { Component } from 'react';
import { observer, inject } from 'mobx-react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/* root imports: common */
import { Subtitle, LoginButton } from 'features/Login/components';
import { AuthStore } from 'features/Login/store';

/* local imports: common */
import { styles } from './styles';

interface GuestFormProps extends WithStyles<typeof styles> {
	store?: AuthStore;
}

@inject('store')
@observer
class GuestFormComponent extends Component<GuestFormProps> {
	public loginHandler = () => {
		this.props.store!.login({ isGuest: true });
	};

	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<Subtitle>Use Guest Access</Subtitle>
				<div className={classes.wrapper}>
					<LoginButton gradient="primary" onClick={this.loginHandler}>
						Get access
					</LoginButton>
				</div>
			</Paper>
		);
	}
}

const GuestForm = withStyles(styles)(GuestFormComponent);

export { GuestForm };
