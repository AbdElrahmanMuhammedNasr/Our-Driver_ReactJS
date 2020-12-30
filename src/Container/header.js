import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" > <strong> Our Driver </strong></a>
                        <div className="collapse navbar-collapse d-flex justify-content-between">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to={{pathname:'/home'}}>
                                        <a>Home</a>
                                    </NavLink>
                                </li>

                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink  className="nav-link" to={{pathname:'/profile/files'}} >
                                        <strong>Abdo nasr</strong>
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
