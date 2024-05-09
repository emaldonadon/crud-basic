import React, { useState } from 'react';
import { Paper, TextField, Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import HomeIcon from '@mui/icons-material/Home';

export const NewProduct = () => {
    const navigate = useNavigate()
    const [producto, setProducto] = useState('')
    const [valor, setValor] = useState('')
    const [descripcion, setDescripcion] = useState('')
    return (
        <Paper elevation={3} style={{ padding: 30 }}>
            <Grid container spacing={2}>
                <Grid item xs={10} sm={4}>
                    <TextField
                        fullWidth
                        label="prodcuto"
                        name="producto"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10} sm={4}>
                    <TextField
                        fullWidth
                        label="valor del producto"
                        name="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={10} sm={4}>
                    <TextField
                        fullWidth
                        label="descripcion del producto"
                        name="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} justifyContent="center" container>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <Button variant="contained"
                        color="primary"
                        startIcon={<HomeIcon />}
                        onClick={() => navigate('/')}>
                        Inicio
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                        onClick={() => navigate('/')} >
                        Guardar
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper >
    )
}
