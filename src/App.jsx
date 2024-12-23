import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react'

import AppBarTitle from './components/AppBar';
import { useTheme } from "@mui/material/styles";
import { AppProvider } from '@toolpad/core/react-router-dom';

import LoadingProgress from './components/common/LoadingProgress'

const BalancePage = lazy(() => import('./pages/Balance')); 
const HistoryPage = lazy(() => import('./pages/History')); 
const HistoryDetailPage = lazy(() => import('./pages/History/_id'));

// Danh sách các item điều hướng
const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: '',
        title: 'Home',
        icon: <DashboardIcon />,
    },
    {
        segment: 'history',
        title: 'History',
        icon: <ShoppingCartIcon />,
    },
];



function DashboardLayoutAccountSidebar() {
    const customTheme = useTheme();


    console.log("App.jsx")

    return (
        <Router>
            <AppProvider navigation={NAVIGATION} theme={customTheme}>
                <DashboardLayout
                    slots={{ appTitle: AppBarTitle }}
                >
                    <Suspense fallback={<LoadingProgress />}> 
                        <Routes> 
                            <Route path="/" element={<BalancePage />} /> 
                            <Route path="/history" element={<HistoryPage />} /> 
                            <Route path="/history/:id" element={<HistoryDetailPage />} /> 
                        </Routes>
                    </Suspense>
                </DashboardLayout>
            </AppProvider>
        </Router>
    );
}

DashboardLayoutAccountSidebar.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
