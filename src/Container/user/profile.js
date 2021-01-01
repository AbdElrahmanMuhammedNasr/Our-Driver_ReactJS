import React, {Component} from "react";
import UserInfo from "./userInfo";
import Files from "./Files";
import AddNewFile from "./addNewFile";
import {Route} from "react-router";
import axios from "axios";

class Profile extends Component {
    state = {
        user: {
            name: "",
            email: "",
            createAt: ''

        }
    }

    // link to api o get user
    componentDidMount() {
        const email = this.props.match.params.email;
        axios.get('/user/getOneUser/' + email)
            .then(user => {
                this.setState({
                    ...this.state,
                    user: {
                        name: user.data.name,
                        email: user.data.email,
                        createAt: user.data.creatAt
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })


    }
    render() {
        return (
            <div className="row">
                <section className="col-sm-3">
                    <UserInfo UserData={this.state.user}/>
                </section>
                <section className="col-sm-9 p-3">
                    <Route path={'/profile/:email/files'}  component={Files}/>
                    <Route path={"/profile/:email/addNewFile"} component={AddNewFile}/>
                </section>
            </div>

        )
    }
}

export default Profile
