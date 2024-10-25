import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

  
  const GridTable = () => {
    const dateTime = new Date().toDateString()
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: '',
            headerName: '',
            width: 150,
            renderCell: (params) => {
                const index = params.row.id - 1;
                return (
                    <div className="flex justify-center items-center h-full">
                        <div 
                            className="w-8 h-8 rounded-full grid place-content-center text-xs uppercase" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        >
                            {params.row.Transaction.charAt(0)}
                        </div>
                    </div>
                );
            }
        },
        {
          field: 'Transaction',
          headerName: 'Transactions',
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
        },
      ];
      

    const rows = [
        { id: 1, amount: '$'+230, Transaction: 'Transportation', date: dateTime},
        { id: 2, amount: '$'+230, Transaction: 'Stream', date: dateTime},
        { id: 3, amount: '$'+230, Transaction: 'Groceries', date: dateTime},
        { id: 4, amount: '$'+230, Transaction: 'Drinks', date: dateTime},
        { id: 5, amount: '$'+230, Transaction: 'Vacation', date: dateTime},
        { id: 6, amount: '$'+230, Transaction: 'Subscription', date: dateTime},
        { id: 7, amount: '$'+230, Transaction: 'Cars', date: dateTime},
        { id: 8, amount: '$'+230, Transaction: 'Transportation', date: dateTime},
        { id: 9, amount: '$'+230, Transaction: 'Drinks', date: dateTime},
      ];

    return (
    <Box 
        sx={{ height: 'max-content',
        background: '#11438a15',
        borderBottom: '1px solid var(--borderr)',
        padding: '10px',
        // width: '99%',
        overflow: 'auto',
        marginTop: '15px',
        '& .MuiDataGrid-toolbarContainer': {
            flexDirection: 'row-reverse',
            marginBottom: '10px',
        },
        '& .MuiDataGrid-root': {
            border: "none",
            color: 'var(--maintext)'
        },
        '& .MuiDataGrid-row': {
            borderBottom: '1px solid var(--borderr)',
        },
        "& .MuiDataGrid-columnHeaders ": {
            color: '#000000',
        },
        "& .MuiInputBase-input": {
            color: 'var(--maintext)',
        },
        "& .MuiSvgIcon-root ": {
            color: 'var(--maintext)',
        },
        "& .MuiDataGrid-columnHeaders .PrivateSwitchBase-input": {
            color: '#00000',
        },
        "& .MuiTablePagination-displayedRows":{
            color: 'var(--maintext)'
        }
        }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{toolbar:GridToolbar,}}
        slotProps={{
            toolbar: {
                showQuickFilter: true,
                quickFilterProps: {debounceMs: 500}
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
  }
  
  export default GridTable;