import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import GridViewIcon from "@mui/icons-material/GridView"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavLink } from 'react-router-dom';
// import { colours } from '../../Theme';

function Sidenav() {

    return (
        <Sidebar className='sidebar' backgroundColor='white' width='15rem'>
            <Menu>
            <MenuItem icon={<GridViewIcon />}>
                <NavLink to='/' className='nav-link'>Dashboard</NavLink>
            </MenuItem>
            <MenuItem icon = { <AssignmentIndOutlinedIcon />}>
                <NavLink to='/Memberships' className='nav-link'>Memberships</NavLink>
            </MenuItem>
            <MenuItem icon = {<FavoriteBorderOutlinedIcon />}>
                <NavLink to='/Favourites' className='nav-link'>Favourites</NavLink>
            </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default Sidenav;