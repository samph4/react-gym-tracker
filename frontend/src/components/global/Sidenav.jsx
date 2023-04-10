import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import GridViewIcon from "@mui/icons-material/GridView"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavLink } from 'react-router-dom';
// import { colours } from '../../Theme';

function Sidenav() {

    const spacing_style = {
        paddingTop: ['1rem'],
        paddingBottom: ['1rem']
    }

    return (
        <Sidebar className='sidebar' backgroundColor='white' width='15rem'>
            <Menu className='menu-item' style={{paddingTop:'1rem'}}>
            <NavLink to='/' className='nav-link'>
                <MenuItem style={spacing_style} icon={<GridViewIcon />}>
                    Dashboard
                </MenuItem>
            </NavLink>
            <NavLink to='/Memberships' className='nav-link'>
                <MenuItem style={spacing_style} icon={<AssignmentIndOutlinedIcon />}>
                    Memberships
                </MenuItem>
            </NavLink>
            <NavLink to='/Favourites' className='nav-link'>
                <MenuItem style={spacing_style} icon={<FavoriteBorderOutlinedIcon />}>
                    Favourites
                </MenuItem>
            </NavLink>
            </Menu>
        </Sidebar>
    )
}

export default Sidenav;