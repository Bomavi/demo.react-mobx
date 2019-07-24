/* npm imports: common */
import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, computed, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/* root imports: common */
import { UsernameInput, PasswordInput, LoginTabs, LoginButton } from 'features/Login/components';
import { AuthStore } from 'features/Login/store';

/* local imports: common */
import { styles } from './styles';

interface LoginFormProps extends WithStyles<typeof styles> {
	store?: AuthStore;
}

@inject('store')
@observer
class LoginFormComponent extends React.Component<LoginFormProps> {
	@observable private tabIndex: number = 0;

	@observable public username: string = '';
	@observable public password: string = '';
	@observable public repeatPassword: string = '';

	@computed public get isPasswordCorrect() {
		return this.password === this.repeatPassword;
	}

	@computed public get isLoginReady() {
		return !!this.username && !!this.password;
	}

	@computed public get isRegistrationReady() {
		return this.isLoginReady && this.isPasswordCorrect;
	}

	@action private tabClickHandler = (e: React.ChangeEvent<{}>, value: number) => {
		this.tabIndex = value;
	};

	@action public usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.username = value;
	};

	@action public passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.password = value;
	};

	@action public repeatPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.repeatPassword = value;
	};

	public loginHandler = () => {
		const { login } = this.props.store!;
		const userData = {
			username: this.username,
			password: this.password,
		};

		if (this.isLoginReady) login(userData);
	};

	public registrationHandler = () => {
		const { register } = this.props.store!;
		const userData = {
			username: this.username,
			password: this.password,
		};

		if (this.isRegistrationReady) register(userData);
	};

	public render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.paper}>
				<LoginTabs tabIndex={this.tabIndex} onChange={this.tabClickHandler} />
				<div className={classes.wrapper}>
					<UsernameInput value={this.username} onChange={this.usernameChangeHandler} />
					<PasswordInput value={this.password} onChange={this.passwordChangeHandler} />
					{this.tabIndex === 0 && (
						<LoginButton
							marginTop={14}
							gradient="secondary"
							onClick={this.loginHandler}
						>
							Login
						</LoginButton>
					)}
					{this.tabIndex === 1 && (
						<>
							<PasswordInput
								repeatPassword
								value={this.repeatPassword}
								onChange={this.repeatPasswordChangeHandler}
							/>
							<LoginButton
								marginTop={14}
								gradient="secondary"
								onClick={this.registrationHandler}
							>
								Register
							</LoginButton>
						</>
					)}
				</div>
			</Paper>
		);
	}
}

const LoginForm = withStyles(styles)(LoginFormComponent);

export { LoginForm };
