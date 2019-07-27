/* npm imports: common */
import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { IconProps, InputButton } from 'views/elements';

/* local imports: common */
import { styles } from './styles';

export interface CustomInputProps extends WithStyles<typeof styles> {
	icon?: IconProps;
	placeholder?: string;
	defaultValue?: string;
	autoFocus?: boolean;
	isFetching?: boolean;
	onClick?: (value: string) => void;
	onChange?: (value: string) => void;
	onCancel?: () => void;
}

@observer
class CustomInputComponent extends React.Component<CustomInputProps> {
	@observable private inputValue: string = '';

	@computed private get isEmpty() {
		const { defaultValue } = this.props;
		return !this.inputValue || this.inputValue === defaultValue;
	}

	@action private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.inputValue = value;
		this.changeCallbackHandler(value);
	};

	@action private actionClickHandler = () => {
		const { onClick, onCancel } = this.props;
		if (onClick) onClick(this.inputValue);
		if (onCancel) onCancel();
		this.clearInputValue();
	};

	@action private clearHandler = () => {
		this.clearInputValue();
		this.changeCallbackHandler(this.inputValue);
	};

	@action private clearInputValue = () => {
		this.inputValue = '';
	};

	private keyPressHandler = (e: React.KeyboardEvent) => {
		const { onClick, onCancel } = this.props;
		if (e.key === 'Enter' && onClick) {
			if (this.inputValue) onClick(this.inputValue);
			if (onCancel) onCancel();
			if (!onCancel) this.clearInputValue();
		}
	};

	private changeCallbackHandler = (value: string) => {
		const { onChange } = this.props;
		if (onChange) onChange(value);
	};

	public render() {
		const {
			classes,
			icon,
			placeholder,
			defaultValue,
			isFetching = false,
			autoFocus = false,
			onClick,
			onCancel,
		} = this.props;

		const value = this.inputValue || defaultValue || this.inputValue;

		return (
			<div className={classes.root}>
				{icon && (
					<InputButton
						icon={icon}
						isFetching={isFetching}
						color={onClick ? 'primary' : 'inherit'}
						disabled={onClick && this.isEmpty}
						onClick={onClick && this.actionClickHandler}
					/>
				)}
				{icon && <Divider className={classes.divider} />}
				<InputBase
					className={classes.input}
					placeholder={placeholder}
					value={value}
					autoFocus={autoFocus}
					onChange={this.changeHandler}
					onKeyPress={this.keyPressHandler}
				/>
				{(!this.isEmpty || onCancel) && <Divider className={classes.divider} />}
				{!this.isEmpty && !onCancel && (
					<InputButton icon={{ name: 'close' }} onClick={this.clearHandler} />
				)}
				{onCancel && <InputButton icon={{ name: 'close' }} onClick={onCancel} />}
			</div>
		);
	}
}

const CustomInput = withStyles(styles)(CustomInputComponent);

export { CustomInput };
