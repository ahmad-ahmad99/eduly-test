import { Card, CardContent, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { useTranslate } from 'src/locales';

interface Props {
  title: string;
  range: '7' | '30';
}

export default function EngagementChart({ title, range }: Props) {
  const [data, setData] = useState<number[]>([]);
  const [xLabels, setXLabels] = useState<string[]>([]);
  const { t } = useTranslate();
  useEffect(() => {
    const days = range === '7' ? 7 : 30;
    const labels = Array.from({ length: days }, (_, i) => `${t('day')} ${i + 1}`);
    const values = Array.from({ length: days }, () => Math.floor(Math.random() * 100));

    setXLabels(labels);
    setData(values);

    const interval = setInterval(() => {
      const newValues = Array.from({ length: days }, () => Math.floor(Math.random() * 100));
      setData(newValues);
    }, 5000); // simulate live update

    return () => clearInterval(interval);
  }, [range]);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {t(title)}
        </Typography>
        <LineChart
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          series={[{ data, label: t(title), color: '#1976d2' }]}
          // width={500}
          height={300}
        />
      </CardContent>
    </Card>
  );
}
