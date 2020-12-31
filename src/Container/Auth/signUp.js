import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <div className="text-dark bg-white p-3" style={{width: '35%', margin: ' auto ', borderRadius: '5px'}}>
                <h3>SignUp</h3>
                <div className="form-group m-3">
                    <label>Email</label>
                    <input type="text" className="form-control  " placeholder="Email"/>
                </div>
                <div className="form-group m-3">
                    <label>Name</label>
                    <input type="text" className="form-control  " placeholder="Name"/>
                </div>
                <div className="form-group m-3">
                    <label>Password</label>
                    <input type="text" className="form-control  " placeholder="Password"/>
                </div>
                <div className="form-group m-3">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control  " placeholder="Confirm Password"/>
                </div>
                <button className="btn btn-primary">Login</button>
                <br/>
                <br/>
                <NavLink to={{pathname: '/login'}}>
                    <strong>Login</strong>
                </NavLink>

            </div>
        )
    }

}

export default SignUp
