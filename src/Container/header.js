import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

class Header extends Component {

    state = {
        ownerEmail:""
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            ownerEmail:localStorage.getItem("loginEmail")

        })
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <p className="navbar-brand"><strong> Our Drive </strong></p>
                        <div className="collapse navbar-collapse d-flex justify-content-between">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to={{pathname: '/home'}}>
                                        <p>Home</p>
                                    </NavLink>
                                </li>

                            </ul>


                            {
                                localStorage.getItem('loginEmail') ?
                                    <ul className="navbar-nav">

                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                     to={{pathname: '/profile/' + this.state.ownerEmail + '/files'}}>
                                                <strong>myProfile</strong>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={{pathname: '/login'}}>
                                                <strong>Logout</strong>
                                            </NavLink>
                                        </li>
                                    </ul>

                                    : <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={{pathname: '/login'}}>
                                                <strong>Login</strong>
                                            </NavLink>
                                        </li>
                                    </ul>
                            }


                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
