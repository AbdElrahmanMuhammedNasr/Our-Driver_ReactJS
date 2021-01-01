import React from "react";
import userImage from './ava.svg';
import {NavLink} from "react-router-dom";

const UserInfo = (props) => {


    return (
        <div className="d-flex justify-content-between flex-column p-5 bg-dark text-white" style={{
            width: '100%',
            height: '35vh',
            backgroundColor: 'white',
            textAlign: 'center',
            boxShadow: '0px 0px 10px black',
            borderRadius: '15px',
            margin: '10vh 10px'
        }}>
            <section className="row">
                <img style={{width: '200px', margin: '0px auto'}} src={userImage}/>
                <h3><strong>{props.UserData.name}</strong></h3>
                <small>Joined at : {props.UserData.createAt.slice(0, 10)}</small>
                <small>Email : {props.UserData.email}</small>
            </section>


            <section className="row">
                <NavLink className="btn btn-primary" to={{pathname: '/profile/' + props.UserData.email + '/files'}}>Show
                    Files</NavLink>
                {
                    props.UserData.email === localStorage.getItem('loginEmail')
                        ? <NavLink style={{margin: '10px 0px'}} className="btn btn-success"
                                   to={{pathname: '/profile/' + props.UserData.email + '/addNewFile'}}>Add
                            File</NavLink>
                        : null
                }

            </section>
            </div>
        )

}

export default UserInfo
