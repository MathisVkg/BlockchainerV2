import React, { useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaAngleLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { FaFreebsd } from 'react-icons/fa'
import { SiMarketo } from 'react-icons/si'
import { FaCoins } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'

const NavBar = () => {
    const navBar = useRef(null)
    const navTest = useRef(null)
    return (
        <>
            <NavDesktop />
            <NavMobile />
        </>
    )
    
    function openMenu() {
        navBar.current.classList.remove('navOff')
        navBar.current.classList.add('navOn')
    }

    function closeMenu() {
        navBar.current.classList.remove('navOn')
        navBar.current.classList.add('navOff')
    }
    

    function NavDesktop() {
        return (
            <div>
                <span className="openIcon"><GiHamburgerMenu onClick={ () => { openMenu() } }/></span>
                <nav className="navBar navOff" ref={ navBar }>
                    <div className="gold">
                        <div className="black">
                            <span className="backIcon"><FaAngleLeft onClick={ () => { closeMenu() } }/></span>
                            <NavLink className="dashBoard" to='/Home' ref={ navBar }>Home</NavLink>
                            <NavLink to='/markets'>Markets</NavLink>
                            <NavLink to='/traed'>Trade</NavLink>
                            <NavLink to='/wallets'>Wallets</NavLink>
                            <NavLink to='/user'>User</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    function NavMobile() {
        return (
            <div>
                <nav class="navBarMobile">
                    <NavLink to='/Home'>
                        <div className="group">
                            <span className="navIcon"><FaFreebsd /></span>
                            <p>Home</p>
                        </div>
                    </NavLink>
                    <NavLink to='/markets'>
                        <div className="group">
                            <span className="navIcon"><SiMarketo /></span>
                            <p>Markets</p>
                        </div>
                    </NavLink>
                    <NavLink to='/trade'>
                        <div className="group">
                            <span className="navIcon"><FaCoins /></span>
                            <p>Trade</p>
                        </div>
                    </NavLink>
                    <NavLink to='/wallets'>
                        <div className="group">
                            <span className="navIcon"><IoWalletSharp /></span>
                            <p>Wallets</p>
                        </div>
                    </NavLink>
                    <NavLink to='/user'>
                        <div className="group">
                            <span className="navIcon"><FaUser /></span>
                            <p>User</p>
                        </div>
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default NavBar
