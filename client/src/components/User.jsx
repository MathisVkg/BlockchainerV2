import React from 'react'
import {NavLink} from "react-router-dom";

const User = () => {
    return (
        <div>
            <NavLink to='/sign-in'>
                <button>Sign-In</button>
            </NavLink>
            <NavLink to='/sign-up'>
                <button>Sign-Up</button>
            </NavLink>
        </div>

    )
}

export default User
