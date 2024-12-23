import * as React from 'react';
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BalancePage from './pages/Balance';
import HistoryPage from './pages/History';
import HistoryDetailPage from './pages/History/_id'; // Trang chi tiết lịch sử
import AppBarTitle from './components/AppBar';
import { useTheme } from "@mui/material/styles";
import { AppProvider } from '@toolpad/core/react-router-dom';

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
        action: <DashboardIcon />,
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
            <AppProvider 
                navigation={NAVIGATION}
                theme={customTheme}
            >
                <DashboardLayout
                    slots={{
                        appTitle: AppBarTitle,
                    }}
                >
                    {/* Điều hướng dựa trên URL */}
                    <Routes>
                        {/* Trang chính */}
                        <Route path="/" element={<BalancePage />} />
                        
                        {/* Trang lịch sử */}
                        <Route path="/history" element={<HistoryPage />} />
                        
                        {/* Chi tiết lịch sử, sử dụng tham số URL */}
                        <Route path="/history/:id" element={<HistoryDetailPage />} />
                    </Routes>
                </DashboardLayout>
            </AppProvider>
        </Router>
    );
}

DashboardLayoutAccountSidebar.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
