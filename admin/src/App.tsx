import './App.css';
import { ThemeProvider, useTheme } from '@emotion/react';
import { LoginPage } from './features/auth/pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectAdmin, ProtectAuth } from './Components/ProtectRouter';
import Admin from './Components/Layout/Admin';

function App() {
    const theme = useTheme();
    return (
    );
}

export default App;
