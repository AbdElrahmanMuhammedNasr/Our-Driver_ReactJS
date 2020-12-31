import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const disableBtn = email == "" | password == "" | name == "" | conPassword == "";

    const onSignUp = (event) => {
        event.preventDefault();
        console.log(email, name, password, conPassword)
        props.history.push('/home');
    }


    return (
        <form onSubmit={onSignUp} method="POST">
            <div className="text-dark bg-white p-3 col-12 col-sm-10 col-md-6"
                 style={{margin: ' auto ', borderRadius: '5px'}}>
                <h3>SignUp</h3>
                <div className="form-group m-3">
                    <label>Email</label>
                    <input type="text" className="form-control  " placeholder="Email" value={email}
                           onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="form-group m-3">
                    <label>Name</label>
                    <input type="text" className="form-control  " placeholder="Name" value={name}
                           onChange={({target}) => setName(target.value)}/>
                </div>
                <div className="form-group m-3">
                    <label>Password</label>
                    <input type="password" className="form-control  " placeholder="Password" value={password}
                           onChange={({target}) => setPassword(target.value)}/>
                </div>
                <div className="form-group m-3">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control  " placeholder="Confirm Password" value={conPassword}
                           onChange={({target}) => setConPassword(target.value)}/>
                </div>
                <button type="submit" disabled={disableBtn} className="btn btn-primary">SignUp</button>
                <br/>
                <br/>
                <NavLink to={{pathname: '/login'}}>
                    <strong>Login</strong>
                </NavLink>

            </div>
        </form>
    )


}

export default SignUp
