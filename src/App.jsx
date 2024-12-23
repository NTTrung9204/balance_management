import * as React from 'react';
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import theme from './theme';
import BalancePage from './pages/Balance';
import HistoryPage from './pages/History';
import HistoryDetailPage from './pages/History/_id'; // Trang chi tiết lịch sử
import AppBarTitle from './components/AppBar';
import { useTheme } from "@mui/material/styles";

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
        segment: 'HistoryPage',
        title: 'History',
        icon: <ShoppingCartIcon />,
    },
];



function DashboardLayoutAccountSidebar() {
    const [pathname, setPathname] = React.useState('/');
    const [params, setParams] = React.useState({});
    const customTheme = useTheme();

    // Hàm điều hướng và xử lý route động
    const navigate = (path) => {
        const match = path.match(/\/history\/(\d+)/); // Kiểm tra nếu đường dẫn có chứa /history/:id
        if (match) {
            const id = match[1];
            setParams({ id });
            setPathname(`/history/:id`); // Đặt pathname mới là /history/:id
        } else {
            setPathname(path);
        }
    };

    const pageMapping = {
        '/': <BalancePage />,
        '/HistoryPage': <HistoryPage navigate={navigate} />,
        // Thêm logic cho trang HistoryDetail, xử lý route động
        '/history/:id': (id) => <HistoryDetailPage id={id} />,
    };

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate,
        };
    }, [pathname]);

    console.log("App.jsx")

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={customTheme}
        >
            <DashboardLayout
                slots={{
                    appTitle: AppBarTitle,
                }}
            >
                {/* Điều hướng đến trang tương ứng */}
                {pathname === '/' && pageMapping['/']}

                {/* Nếu là /history/:id, render HistoryDetailPage với id */}
                {pathname.startsWith('/history') && params.id
                    ? pageMapping['/history/:id'](params.id)
                    : null}

                {/* Nếu là /history, render HistoryPage */}
                {pathname === '/HistoryPage' && pageMapping['/HistoryPage']}
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutAccountSidebar.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
