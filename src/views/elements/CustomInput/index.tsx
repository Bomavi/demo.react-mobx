import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

import { removeSpaces } from 'utils/helpers';
import InputButton from 'views/elements/InputButton';
import { IconProps } from 'views/elements/Icon';

import { useStyles } from './styles';

export interface CustomInputProps {
  icon?: IconProps;
  placeholder?: string;
  defaultValue?: string;
  autoFocus?: boolean;
  isFetching?: boolean;
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
}

const CustomInput: FC<CustomInputProps> = (props) => {
  const {
    icon,
    placeholder,
    defaultValue,
    isFetching = false,
    onClick,
    onCancel,
    onChange,
  } = props;

  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const trimedValue = useMemo(() => {
    return removeSpaces(inputValue).trim();
  }, [inputValue]);

  const isEmpty = useMemo(() => {
    return !trimedValue || trimedValue === defaultValue;
  }, [defaultValue, trimedValue]);

  const value = useMemo(() => inputValue || defaultValue || inputValue, [
    defaultValue,
    inputValue,
  ]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
  };

  const clearHandler = useCallback(() => {
    setInputValue('');
  }, []);

  const actionClickHandler = () => {
    if (onClick) onClick(trimedValue);
    if (onCancel) onCancel();

    clearHandler();
  };

  const keyPressHandler = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && onClick) {
      if (trimedValue) onClick(trimedValue);
      if (onCancel) onCancel();
      if (!onCancel) clearHandler();
    }

    if (e.key === 'Escape' && onCancel) onCancel();
  };

  useEffect(() => {
    if (onChange) onChange(trimedValue);
  }, [onChange, trimedValue]);

  return (
    <div className={classes.root}>
      {icon && (
        <InputButton
          icon={icon}
          isFetching={isFetching}
          color={onClick ? 'primary' : 'inherit'}
          title={icon.title}
          disabled={onClick && isEmpty}
          onClick={onClick && actionClickHandler}
        />
      )}
      {icon && <Divider className={classes.divider} />}
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        onKeyUp={keyPressHandler}
      />
      {(!isEmpty || onCancel) && <Divider className={classes.divider} />}
      {!isEmpty && !onCancel && (
        <InputButton
          icon={{ name: 'close' }}
          title="Clear"
          onClick={clearHandler}
        />
      )}
      {onCancel && (
        <InputButton
          icon={{ name: 'close' }}
          title="Cancel"
          onClick={onCancel}
        />
      )}
    </div>
  );
};

export default memo(CustomInput);
