import React, { useState} from 'react';
import { Box} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export const HomePage = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { field: 'nombre', headerName: 'Nombre', width: 200 },
        { field: 'precio', headerName: 'Precio', width: 150 },
        { field: 'descripcion', headerName: 'Descripción', width: 300 },

    ];

    return (
        <Box style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={loading}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                components={{ Toolbar: GridToolbar }}
            />
        </Box>
    );
};
