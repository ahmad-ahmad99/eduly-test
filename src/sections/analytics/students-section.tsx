// ----------------------------------------------------------------------
import { GridColDef } from '@mui/x-data-grid/models';
import { useEffect, useState } from 'react';
import AttendanceBadge from 'src/components/badge/attendance-badge';
import AppIsExistView from 'src/components/other/app-is-exist-view';
import { CustomDataGrid } from 'src/components/table/table-data-grid';
import { useTranslate } from 'src/locales';
import { Student } from 'src/types/students';

export default function StudentsSection() {
  const { t } = useTranslate();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('studentName'), width: 180, cellClassName: 'centered-cell' },
    {
      field: 'status',
      headerName: t('status'),
      width: 150,
      cellClassName: 'centered-cell',
      renderCell: (params) => <AttendanceBadge label={params?.row?.status} />,
    },
    {
      field: 'lastActive',
      headerName: t('lastActive'),
      width: 130,
      cellClassName: 'centered-cell',
    },
    {
      field: 'sessionsAttended',
      headerName: t('sessionsAttended'),
      type: 'number',
      width: 120,
      cellClassName: 'centered-cell',
    },
    {
      field: 'participating',
      headerName: t('participatingNow'),
      cellClassName: 'centered-cell',
      renderCell: (params) => <AppIsExistView isExist={params.value} />,
    },
  ];

  const fetchData = async () => {
    try {
      const res = await fetch('/api/attendance');
      const data = await res.json();
      console.log('data', data);

      setStudents(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch attendance data:', err);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalDuration = Math.floor(Math.random() * 2000) + 3000;
    const interval = setInterval(() => {
      fetchData();
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CustomDataGrid columns={columns} loading={loading} rows={students} pageSize={10} />
    </>
  );
}
