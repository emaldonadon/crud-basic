import { BrowserRouter, Routes, Route } from 'react-router-dom'
import theme from '../theme';
import { Navbar } from '../components/Navbar'
import { HomePage } from '../pages/HomePage'
import { Container, ThemeProvider } from '@mui/material'
import { NewProduct } from '../pages/NewProduct'


export const AppRouter = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <Container maxWidth="lg" style={{ paddingTop: '7%' }}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/nuevo' element={<NewProduct />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    )
}
