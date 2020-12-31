import React, {Component} from "react";
import userImage from './avatar.jpeg';
import {NavLink} from "react-router-dom";

class UserInfo extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between flex-column p-5 bg-dark text-white"  style={{
                width: '100%',
                height: '35vh',
                backgroundColor: 'white',
                textAlign: 'center',
                boxShadow: '0px 0px 10px black',
                borderRadius: '20px',
                margin:'10vh 10px'
            }}>
                <section className="row">
                    <img style={{width:'200px',margin:'0px auto'}} src={userImage}/>
                    <strong>Tamer Hassan</strong>
                    <small>joined at 30-5-2020</small>
                </section>

                <section className="row">
                    <NavLink className="btn btn-primary" to={{pathname:'/profile/files'}}>Show File</NavLink>
                    <NavLink style={{margin:'10px 0px'}} className="btn btn-success" to={{pathname:'/profile/addNewFile'}}>Add File</NavLink>
                </section>
            </div>
        )
    }
}

export default UserInfo
