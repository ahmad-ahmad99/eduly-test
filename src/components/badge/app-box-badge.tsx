import { Box } from '@mui/material';
import * as React from 'react';
import { useTranslate } from 'src/locales';

interface IAppBoxBadgeProps {
  label: string;
  backgroundColor: string;
}

const AppBoxBadge: React.FC<IAppBoxBadgeProps> = (props) => {
  const { label, backgroundColor } = props;
  const { t } = useTranslate();
  return (
    <Box
      sx={{
        color: 'white',
        backgroundColor: backgroundColor,
        padding: '1.5px 10px 3px 10px',
        borderRadius: 3,
        display: 'inline-block',
        margin: '2px',
      }}
    >
      {t(label)}
    </Box>
  );
};

export default AppBoxBadge;
