import * as React from 'react';
import PropTypes from 'prop-types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import theme from './theme';
import BalancePage from './pages/Balance';
import StatisticPage from './pages/Statistic';

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
        segment: 'StatisticPage',
        title: 'History',
        icon: <ShoppingCartIcon />,
    },
];

const pageMapping = {
  '/': <BalancePage />,
  '/StatisticPage': <StatisticPage />
};

function DashboardLayoutAccountSidebar() {
    const [pathname, setPathname] = React.useState('/dashboard');

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return (
      <AppProvider
          navigation={NAVIGATION}
          router={router}
          theme={theme}
      >
          <DashboardLayout>
              {pageMapping[pathname] || <BalancePage />}
          </DashboardLayout>
      </AppProvider>
  );
  
}

DashboardLayoutAccountSidebar.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
