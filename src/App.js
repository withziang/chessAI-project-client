import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './routes/routeList';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//---------------------------- General     CSS ----------------------------------------------------------------------
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//---------------------------- main   --------------------------------------------------------------------------------
const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#d2d8da',
            },
            failed: {
                main: '#d50c0c',
            },
            successful: {
                main: '#16d33b',
            },
            disabled: {
                main: '#cbc9c9',
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <RouteList/>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
