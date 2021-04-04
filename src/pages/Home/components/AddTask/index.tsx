import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import CustomInput from 'views/elements/CustomInput';

import { useHomeStore } from '../../store';

const AddTask: FC = () => {
  const { addTask, inProgress } = useHomeStore();

  const actionHandler = (value: string) => {
    if (value) {
      addTask({ description: value, completed: false });
    }
  };

  return (
    <CustomInput
      icon={{
        name: 'plus',
        svgSize: 'md',
        title: 'Add',
      }}
      isFetching={inProgress}
      placeholder="Type task description..."
      onClick={actionHandler}
    />
  );
};

export default observer(AddTask);
