import { SetStateAction } from 'react';

import { Card } from '@mui/material';
import {
  DataGrid,
  gridClasses,
  type GridRowSelectionModel,
  type GridColumnVisibilityModel,
  type DataGridProps,
  GridColDef,
} from '@mui/x-data-grid';

import { useTranslate } from 'src/locales';

const DEFAULT_HIDE_COLUMNS_TOGGLABLE = ['actions'];

export interface CustomDataGridProps extends Partial<DataGridProps> {
  togglableColumns?: string[];
  columnVisibilityModel?: GridColumnVisibilityModel;
  onColumnVisibilityModelChange?: (model: GridColumnVisibilityModel) => void;
  onRowSelectionModelChange?: (model: GridRowSelectionModel) => void;
  setPage?: (value: SetStateAction<number>) => void;
  setRowsPerPage?: (value: SetStateAction<number>) => void;

  columns: GridColDef[];
  rows: any[];
  loading: boolean;
  pageSize: number;
  page?: number;
}

export function CustomDataGrid({
  togglableColumns = DEFAULT_HIDE_COLUMNS_TOGGLABLE,
  columnVisibilityModel,
  onColumnVisibilityModelChange,
  onRowSelectionModelChange,
  setPage = () => {},
  setRowsPerPage = () => {},
  columns,
  rows,
  loading,
  pageSize,
  page,
  ...props
}: CustomDataGridProps) {
  const { t, currentLang } = useTranslate();

  return (
    <Card
      sx={{
        minHeight: 640,
        flexGrow: { md: 1 },
        display: { md: 'flex' },
        height: { xs: 800, md: '1px' },
        flexDirection: { md: 'column' },
        p: 1,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        sortingMode="client"
        showToolbar={false}
        disableRowSelectionOnClick
        disableColumnMenu
        showCellVerticalBorder={false}
        showColumnVerticalBorder={false}
        getRowHeight={() => 'auto'}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={onColumnVisibilityModelChange}
        onRowSelectionModelChange={onRowSelectionModelChange}
        paginationMode="client"
        localeText={{
          footerRowSelected: (count) => `${count.toLocaleString()} ${t('common.rowSelected')}`,
          noRowsLabel:
            currentLang.value === 'en'
              ? 'There are no records to display'
              : 'لا يوجد بيانات لعرضها',
          paginationDisplayedRows: ({ from, to, count }) =>
            currentLang.value === 'en'
              ? `${from} - ${to} of ${count}`
              : `${from} - ${to} من ${count}`,
          paginationRowsPerPage:
            currentLang.value === 'en' ? 'Rows per page' : 'عدد الأسطر في الصفحة',
        }}
        sx={{
          '& .centered-cell': {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
          },

          '& .MuiDataGrid-columnSeparator': { display: 'none' },
          '& .MuiDataGrid-columnHeaders': {
            marginTop: '18px',
            marginBottom: '8px',
            borderRadius: '12px',
            border: 'none',
            overflow: 'hidden',
          },
          '& .MuiDataGrid-row': {
            marginTop: '8px',
            marginBottom: '8px',
            borderRadius: '12px',
            border: '1px solid #919EAB29',
            padding: 1,
            boxShadow: 'none',
          },
          '& .MuiDataGrid-cell, .MuiDataGrid-footerContainer': {
            border: '0px',
          },
          [`& .${gridClasses.cell}`]: {
            display: 'flex',
            alignItems: 'center',
          },
        }}
        {...props}
      />
    </Card>
  );
}
