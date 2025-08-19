// ----------------------------------------------------------------------
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useTranslate } from 'src/locales';

const EngagementChart = dynamic(() => import('../../components/charts/engagement-chart'), {
  ssr: false, // disable server-side rendering for charts
  loading: () => <p>Loading charts...</p>,
});

export function CourseSections() {
  const { t } = useTranslate();
  const [range, setRange] = useState<'7' | '30'>('7');

  return (
    <Box>
      <ToggleButtonGroup
        value={range}
        exclusive
        onChange={(_, val) => val && setRange(val)}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="7">{t('last7Days')}</ToggleButton>
        <ToggleButton value="30">{t('last30Days')}</ToggleButton>
      </ToggleButtonGroup>

      <EngagementChart title="dailyActiveStudents" range={range} />
      <EngagementChart title="moduleCompletionRate" range={range} />
    </Box>
  );
}
