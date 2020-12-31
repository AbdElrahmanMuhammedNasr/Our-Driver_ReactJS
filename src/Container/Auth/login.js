import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="text-dark bg-white p-3" style={{width: '35%', margin: ' auto ', borderRadius: '5px'}}>
                <h3>Login</h3>
                <div className="form-group m-3">
                    <label>Email</label>
                    <input type="text" className="form-control  " placeholder="Email"/>
                </div>
                <div className="form-group m-3">
                    <label>Password</label>
                    <input type="text" className="form-control  " placeholder="Password"/>
                </div>
                <button className="btn btn-primary">Login</button>
                <br/>
                <br/>
                <NavLink to={{pathname: '/signUp'}}>
                    <strong>Create Account</strong>
                </NavLink>

            </div>
        )
    }

}

export default Login
