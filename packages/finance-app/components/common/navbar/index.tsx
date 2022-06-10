import React from 'react';
import AppBar from '@mui/material/AppBar';
import { AppBarProps } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)``

const Navbar = (props: AppBarProps) => {
    return (
        <StyledAppBar elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                    {"1"}
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Navbar;


