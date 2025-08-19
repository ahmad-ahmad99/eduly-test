import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface IAppIsExistViewProps {
  isExist: boolean;
}

const AppIsExistView: React.FC<IAppIsExistViewProps> = (props) => {
  const { isExist } = props;

  return (
    <>
      {isExist ? (
        <Icon icon="mdi:check-bold" width="34" height="34" color="green" />
      ) : (
        <Icon icon="mdi:close" width="34" height="34" color="red" />
      )}
    </>
  );
};

export default AppIsExistView;
