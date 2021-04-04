import { FC, lazy, memo, Suspense } from 'react';
import cx from 'classnames';

import HELP from 'assets/icons/help';

import { IconParams, useStyles } from './styles';
import { IconName } from './types';

export interface IconProps extends IconParams {
  name: IconName;
  title?: string;
}

const Icon: FC<IconProps> = ({ name, size = 'sm', svgSize = 'sm', color }) => {
  const classes = useStyles({ color });
  const SVG = lazy(() => import(`assets/icons/${name}`));

  return (
    <div className={cx(classes.iconWrapper, size)}>
      <div className={cx(classes.svgWrapper, svgSize)}>
        <Suspense fallback={<HELP style={{ width: 16, height: 16 }} />}>
          <SVG />
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Icon);
