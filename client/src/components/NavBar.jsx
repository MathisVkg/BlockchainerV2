import React, { useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaAngleLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const navBar = useRef(null)
    const navTest = useRef(null)
    return (
        <div>
            <span className="openIcon"><GiHamburgerMenu onClick={ () => { openMenu() } }/></span>
            <nav className="navBar navOff" ref={ navBar }>
                <div className="gold">
                    <div className="black">
                        <span className="backIcon"><FaAngleLeft onClick={ () => { closeMenu() } }/></span>
                        <NavLink className="dashBoard" to='/Home' ref={ navBar }>DashBoard</NavLink>
                        <NavLink to='/favorite'>Favorite</NavLink>
                        <NavLink to='/compare'>Compare</NavLink>
                        <NavLink to='/user'>User</NavLink>
                        <NavLink to='/#'>Cryptocurrency</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
    
    function openMenu() {
        navBar.current.classList.remove('navOff')
        navBar.current.classList.add('navOn')
    }

    function closeMenu() {
        navBar.current.classList.remove('navOn')
        navBar.current.classList.add('navOff')
    }
    
}

export default NavBar
