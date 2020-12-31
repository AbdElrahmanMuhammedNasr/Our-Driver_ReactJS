import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const disableBtn = email == "" | password == "";
    const onLogin = (event) => {
        event.preventDefault();
        console.log(email, password)
        props.history.push('/home')
    };


    return (
        <form onSubmit={onLogin} method="POST">

            <div className="container jumbotron text-white bg-dark  p-3 col-12 col-sm-10 col-md-6 "
                 style={{'margin': '10px auto', 'border-radius': '10px', border:'2px solid black', marginBottom:'20px'}}>
                <strong className="display-6">Hello!</strong>
                <p className="lead">This is Our Website to share.</p>
                <hr className="my-4"/>
                <p>this site aim to share your staff with other users and the can download it if they need it.</p>
            </div>


            <div className="text-dark bg-white p-3 col-12 col-sm-10 col-md-6"
                 style={{margin: ' auto ', borderRadius: '5px'}}>
                <h3>Login</h3>
                <div className="form-group m-3">
                    <label>Email</label>
                    <input type="text" className="form-control  " placeholder="Email" value={email}
                           onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="form-group m-3">
                    <label>Password</label>
                    <input type="password" className="form-control  " placeholder="Password" value={password}
                           onChange={({target}) => setPassword(target.value)}/>
                </div>
                <button type="submit" disabled={disableBtn} className="btn btn-primary">Login</button>
                <br/>
                <br/>
                <NavLink to={{pathname: '/signUp'}}>
                    <strong>Create Account</strong>
                </NavLink>

            </div>
        </form>
    )


}

export default Login
