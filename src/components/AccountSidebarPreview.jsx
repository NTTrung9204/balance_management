import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {AccountPreview} from '@toolpad/core/Account';

function AccountSidebarPreview(props) {
    const { handleClick, open, mini } = props;
    return (
        <Stack direction="column" p={0} overflow="hidden">
            <Divider />
            <AccountPreview
                variant={mini ? 'condensed' : 'expanded'}
                handleClick={handleClick}
                open={open}
            />
        </Stack>
    );
}

AccountSidebarPreview.propTypes = {
    /**
     * The handler used when the preview is expanded
     */
    handleClick: PropTypes.func,
    mini: PropTypes.bool.isRequired,
    /**
     * The state of the Account popover
     * @default false
     */
    open: PropTypes.bool,
};

export default AccountSidebarPreview;