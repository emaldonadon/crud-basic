import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { db } from '../firebase/Config'
import { getDocs, collection } from 'firebase/firestore';

export const HomePage = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { field: 'nombre', headerName: 'Nombre', width: 200 },
        { field: 'precio', headerName: 'Precio', width: 150 },
        { field: 'descripcion', headerName: 'Descripción', width: 300 },

    ];

    const getDatos = async () => {
        try {
            const productosCollection = collection(db, 'productos');
            const querySnapshot = await getDocs(productosCollection);

            const data = [];
            querySnapshot.forEach((doc) => {
                const { nombre, precio, descripcion } = doc.data();
                data.push({ id: doc.id, nombre, precio, descripcion });
            });

            setRows(data);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener datos:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDatos()
    }, []);

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
