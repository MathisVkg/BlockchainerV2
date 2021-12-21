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
    // const square1 = useRef(null)
    // const square2 = useRef(null)
    // const square3 = useRef(null)
    // const square4 = useRef(null)
    // const square5 = useRef(null)
    // const iconOpen = useRef(null)
    // const showNav = useRef(null)
    return (
        <>
            <NavDesktop />
            <NavMobile />
        </>
    )
    
    // function openMenu() {
    //     square1.current.classList.remove('navOff')
    //     square1.current.classList.add('navOn')
    //
    //     square2.current.classList.remove('navOff')
    //     square2.current.classList.add('navOn')
    //
    //     square3.current.classList.remove('navOff')
    //     square3.current.classList.add('navOn')
    //
    //     square4.current.classList.remove('navOff')
    //     square4.current.classList.add('navOn')
    //
    //     square5.current.classList.remove('navOff')
    //     square5.current.classList.add('navOn')
    //
    //     iconOpen.current.classList.remove('openIcon')
    //     iconOpen.current.classList.add('removeIcon')
    //
    //     showNav.current.classList.add('showNav')
    //     showNav.current.classList.remove('navBar')
    // }
    //
    // function closeMenu() {
    //     square1.current.classList.remove('navOn')
    //     square1.current.classList.add('navOff')
    //
    //     square2.current.classList.remove('navOn')
    //     square2.current.classList.add('navOff')
    //
    //     square3.current.classList.remove('navOn')
    //     square3.current.classList.add('navOff')
    //
    //     square4.current.classList.remove('navOn')
    //     square4.current.classList.add('navOff')
    //
    //     square5.current.classList.remove('navOn')
    //     square5.current.classList.add('navOff')
    //
    //     iconOpen.current.classList.remove('removeIcon')
    //     iconOpen.current.classList.add('openIcon')
    //
    //     showNav.current.classList.remove('showNav')
    //     showNav.current.classList.add('navBar')
    // }

    function NavDesktop() {
        return (
            <div>
                <nav className="navBar">
                    <div className="yellowBox"></div>
                    <NavLink to="/" className="firstLink">Home <span>-></span></NavLink>
                    <NavLink to="/markets">Markets <span>-></span></NavLink>
                    <NavLink to="/trade">Trade <span>-></span></NavLink>
                    <NavLink to="/wallets">Wallets <span>-></span></NavLink>
                    <NavLink to="/user">User <span>-></span></NavLink>
                </nav>
            </div>
        )
    }

    // function NavDesktop() {
    //     return (
    //         <div>
    //             <span className="openIcon" ref={ iconOpen }><GiHamburgerMenu onClick={ () => { openMenu() } }/></span>
    //             <nav className="navBar" ref={ showNav }>
    //                 <div className="square navOff" ref={ square1 }>
    //                     <span className="backIcon"><FaAngleLeft onClick={ () => { closeMenu() } }/></span>
    //                     <NavLink to="/" onClick={ () => { closeMenu() } }>Home</NavLink>
    //                 </div>
    //                 <div className="square Two navOff" ref={ square2 }>
    //                     <NavLink to="/markets" onClick={ () => { closeMenu() } }>Markets</NavLink>
    //                 </div>
    //                 <div className="square Three navOff" ref={ square3 }>
    //                     <NavLink to="/trade" onClick={ () => { closeMenu() } }>Trade</NavLink>
    //                 </div>
    //                 <div className="square Four navOff" ref={ square4 }>
    //                     <NavLink to="/wallets" onClick={ () => { closeMenu() } }>Wallets</NavLink>
    //                 </div>
    //                 <div className="square Five navOff" ref={ square5 }>
    //                     <NavLink to="/user" onClick={ () => { closeMenu() } }>User</NavLink>
    //                 </div>
    //             </nav>
    //         </div>
    //     )
    // }

    function NavMobile() {
        return (
            <div>
                <nav className="navBarMobile">
                    <NavLink to='/'>
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
