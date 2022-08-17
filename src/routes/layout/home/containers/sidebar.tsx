import React from 'react';
import {
    IconButton,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MuiThemeProvider,
    ListItemAvatar,
    Avatar,
    Link
} from '@material-ui/core';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CameraIcon from '@material-ui/icons/Camera';
import { useStyles } from '../styles/layout';
import { LayoutModule } from '../module/module';
import { LayoutRootType } from '../types';
import { connect } from 'react-redux';
import { toggleSidebar } from '../actions/actions';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { sidebarTheme } from '../styles/sidebarTheme';
import logo from './../../../../assets/logo.jpg';

interface SidebarProps {
    open: boolean;
    toggleOpen: typeof toggleSidebar;
    name: string;
}

function Sidebar(props: SidebarProps) {
    const { open, toggleOpen } = props;
    const classes = useStyles();
    const toggleDrawer = () => {
        toggleOpen();
    };
    const selectedMenu = 'myDevices';
    const menus = (
        <React.Fragment>
            <ListItem alignItems="flex-start" className={classes.toolbar}>
                <ListItemAvatar>
                    <Avatar alt="View Vision" src={logo} />
                </ListItemAvatar>
                <ListItemText primary="View Vision" />
                <div className={classes.toolbar}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
            </ListItem>
            <Divider />
            <List>
                <Link href='/dashboard/mydevices'>
                    <ListItem button key="myDevices" selected={selectedMenu === "myDevices"}>
                        <ListItemIcon><CameraIcon /></ListItemIcon>
                        <ListItemText primary="My Devices" />
                    </ListItem>
                </Link>
            </List>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <MuiThemeProvider theme={sidebarTheme}>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    {menus}
                </Drawer>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

const mapStateToProps = (state: LayoutRootType) => {
    return {
        name: state.authState.name,
        open: state.layoutState.sidbarOpened,
    };
};

const dispatchToProps = {
    toggleOpen: toggleSidebar,
};

const ConnectedSidebar = connect(mapStateToProps, dispatchToProps)(Sidebar);

export const SidebarContainer = () => (
    <DynamicModuleLoader modules={[LayoutModule]}>
        <ConnectedSidebar></ConnectedSidebar>
    </DynamicModuleLoader>
);
