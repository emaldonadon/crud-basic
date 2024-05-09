import { AppBar, Typography, Box, Container, Toolbar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='transparent' >
                <Box>
                    <Container>
                        <Toolbar>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color={'white'}>
                                CRUD
                            </Typography>
                            <Button variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                                onClick={() => navigate('/nuevo')}>
                                NUEVO PRODUCTO
                            </Button>
                        </Toolbar>
                    </Container>
                </Box>
            </AppBar >
        </Box>
    )
}
