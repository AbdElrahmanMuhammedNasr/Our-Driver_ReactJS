import React, {Component} from "react";
import UserInfo from "./userInfo";
import Files from "./Files";
import AddNewFile from "./addNewFile";
import {Route} from "react-router";

class Profile extends Component {
    render() {
        return (
            <div className="row">
                <section className="col-sm-3">
                    <UserInfo/>
                </section>
                <section className="col-sm-9 p-3">
                    <Route path={'/profile/files'}  component={Files}/>
                    <Route path={"/profile/addNewFile"} component={AddNewFile}/>
                </section>
            </div>

        )
    }
}

export default Profile
