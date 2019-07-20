/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/* root imports: view components */
import { UsernameInput, PasswordInput, LoginTabs, LoginButton } from 'features/Login/components';

/* local imports: common */
import { styles } from './styles';

interface LoginFormProps extends WithStyles<typeof styles> {}

@observer
class LoginFormComponent extends React.Component<LoginFormProps> {
	@observable private tabIndex: number = 0;

	@action private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.tabIndex = value;
	};

	@action public actionHandler = (value: string) => {
		console.warn('actionHandler: ', value);
	};

	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<LoginTabs tabIndex={this.tabIndex} onChange={this.tabClickHandler} />
				<div className={classes.wrapper}>
					<UsernameInput />
					<PasswordInput />
					{this.tabIndex === 0 && <LoginButton gradient="secondary">Login</LoginButton>}
					{this.tabIndex === 1 && (
						<>
							<PasswordInput repeatPassword />
							<LoginButton gradient="secondary">Register</LoginButton>
						</>
					)}
				</div>
			</Paper>
		);
	}
}

const LoginForm = withStyles(styles)(LoginFormComponent);

export { LoginForm };
