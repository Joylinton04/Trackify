import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useAppSelector } from '../redux/store';

const GridTable = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const expenses = useAppSelector(state => state.expenses);

  const columns: GridColDef<(typeof expenses)[number]>[] = [
    { field: 'id_', headerName: 'ID', width: 90 },
    {
      field: '',
      headerName: '',
      width: 150,
      renderCell: (params) => {
        const index = params.row.id_ - 1;
        return (
          <div className="flex justify-center items-center h-full">
            <div
              className="w-8 h-8 rounded-full grid place-content-center text-xs uppercase"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            >
              {params.row.purpose.charAt(0) || 'N/A'} {/* Default to N/A if purpose is missing */}
            </div>
          </div>
        );
      }
    },
    {
      field: 'purpose',
      headerName: 'Purpose',
      width: 150,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount spent',
      width: 150,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Created at',
      width: 150,
      editable: true,
      valueFormatter: (params) => new Date(params).toLocaleDateString() || 'N/A', // Format date
    },
  ];

  return (
    <Box
      sx={{
        height: 'max-content',
        background: '#11438a15',
        borderBottom: '1px solid var(--borderr)',
        padding: '10px',
        overflow: 'auto',
        marginTop: '15px',
        '& .MuiDataGrid-toolbarContainer': {
          flexDirection: 'row-reverse',
          marginBottom: '10px',
        },
        '& .MuiDataGrid-root': {
          border: 'none',
          color: 'var(--maintext)',
        },
        '& .MuiDataGrid-row': {
          borderBottom: '1px solid var(--borderr)',
        },
        '& .MuiDataGrid-columnHeaders ': {
          color: '#000000',
        },
        '& .MuiInputBase-input': {
          color: 'var(--maintext)',
        },
        '& .MuiSvgIcon-root ': {
          color: 'var(--maintext)',
        },
        '& .MuiDataGrid-columnHeaders .PrivateSwitchBase-input': {
          color: '#00000',
        },
        '& .MuiTablePagination-displayedRows': {
          color: 'var(--maintext)',
        },
      }}
    >
      <DataGrid
        rows={[...expenses]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())} // Sort by date
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  );
};

export default GridTable;