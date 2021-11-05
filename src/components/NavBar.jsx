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
                <NavLink to='#'>Favorite</NavLink>
                <NavLink to='#'>Compare</NavLink>
                <div class="menuCrypto">
                    <div className="menuGroup">
                        <p class="menuText">Crypto</p>
                        <span class="menuIcon"><IoMdArrowDropright /></span>
                    </div>
                    <NavLink to='#'>Bitcoin</NavLink>
                    <NavLink to='#'>Ethereum</NavLink>
                    <NavLink to='#'>XRP</NavLink>
                    <NavLink to='#'>Cake</NavLink>
                    <NavLink to='#'>Shiba</NavLink>
                </div>
                <NavLink to='#'>User</NavLink>
            </nav>
        </div>
    )
    
    
}

export default NavBar
