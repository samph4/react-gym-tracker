import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { colours } from "../../Theme";
import { useProSidebar } from 'react-pro-sidebar';



function Topbar() {

    const { collapseSidebar } = useProSidebar();

    return (
        <Box className="topbar">
            {/* BRANDING */}
            <Box className='topbar-branding'>
                <img src="logo1.png" alt="" height='40px' onClick={() => collapseSidebar()}/>
                {/* <p className="logo-text">Dug</p> */}
            </Box>

            {/* BUTTONS */}
            <Box className='topbar-buttons' color={colours['dark']}>
                <IconButton type="button" sx={{ p: 1 }} color="inherit" >
                    <NotificationsOutlinedIcon color="white"/>
                </IconButton>
                <IconButton type="button" sx={{ p: 1 }} color="inherit">
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton type="button" sx={{ p: 1 }} color="inherit">
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;