import * as React from 'react';
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import theme from './theme';
import BalancePage from './pages/Balance';
import HistoryPage from './pages/History';
import AppBarTitle from './components/AppBar';
import { useTheme } from "@mui/material/styles";

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'BalancePage',
        title: 'Home',
        icon: <DashboardIcon />,
    },
    {
        segment: 'HistoryPage',
        title: 'History',
        icon: <ShoppingCartIcon />,
    },
];

const pageMapping = {
    '/': <BalancePage />,
    '/HistoryPage': <HistoryPage />
};

function DashboardLayoutAccountSidebar() {
    const [pathname, setPathname] = React.useState('/');
    const customTheme = useTheme()

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    console.log(customTheme.palette.background.default)

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
                
                {pageMapping[pathname] || <BalancePage />}
            </DashboardLayout>
        </AppProvider>
    );

}

DashboardLayoutAccountSidebar.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
