import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdArrowDropright } from 'react-icons/io'
import { FaAngleLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <span className="openIcon"><GiHamburgerMenu/></span>
            <nav class="navBar">
                <span class="backIcon"><FaAngleLeft /></span>
                <NavLink to='/'>DashBoard</NavLink>
                <NavLink to='/favorite'>Favorite</NavLink>
                <NavLink to='/compare'>Compare</NavLink>
                <div class="menuCrypto">
                    <div className="menuGroup">
                        <p class="menuText">Crypto</p>
                        <span class="menuIcon"><IoMdArrowDropright /></span>
                    </div>
                    <NavLink to='/bitcoin'>Bitcoin</NavLink>
                    <NavLink to='/ethereum'>Ethereum</NavLink>
                    <NavLink to='/xrp'>XRP</NavLink>
                    <NavLink to='/cake'>Cake</NavLink>
                    <NavLink to='/shiba'>Shiba</NavLink>
                </div>
                <NavLink to='/user'>User</NavLink>
            </nav>
        </div>
    )
    
    
}

export default NavBar
