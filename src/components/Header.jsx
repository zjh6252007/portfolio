import { useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'
import { navinfo } from '../common/nav'
import { useState } from 'react'
import classNames from 'classnames'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Button from '@mui/material/Button';

const Header = () =>{
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }


    const nav = useNavigate()
    const location = useLocation()
    const [activeNav,SetActiveNav] = useState(location.pathname)
    
    const navgation =(path) =>() =>{
        let navpath = path
        SetActiveNav(path)
        nav(navpath)
    }

    return (
        <div className="header">
            <nav>
                <ul className="menu">
                    {navinfo.map((item,index) =>
                    <li className={classNames(item.name,activeNav === item.path && 'active')} key={index} onClick={navgation(item.path)}>{item.icon}{item.name}</li>
                    )}
                </ul>
            </nav>
        <div className='mobile-menu'>
        <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}><MenuIcon/></Button>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
        <MenuItem onClick={()=>{navgation('/home')();handleClose();}}>Home</MenuItem>
        <MenuItem onClick={()=>{navgation('/projects')();handleClose();}}>Projects</MenuItem>
        <MenuItem onClick={()=>{navgation('/resume')();handleClose();}}>Resume</MenuItem>
        <MenuItem onClick={()=>{navgation('/contact')();handleClose();}}>Contact</MenuItem>
        </Menu>
        </div>
        </div>
    )
}

export default Header;