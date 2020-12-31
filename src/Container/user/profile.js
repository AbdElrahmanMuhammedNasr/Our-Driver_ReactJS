import React, {Component} from "react";
import UserInfo from "./userInfo";
import Files from "./Files";
import AddNewFile from "./addNewFile";
import {Route} from "react-router";

class Profile extends Component {
    state = {
        user :{
            name:"abdo nasr",
            email:"Abdo@gmail.com",
            createAt:'20-2-2013'

        }
    }
    // link to api o get user
    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params.email)
        this.setState({
            user:{
                ...this.state.user,
                email:this.props.match.params.email,
            }
        })

    }
    render() {
        return (
            <div className="row">
                <section className="col-sm-3">
                    <UserInfo UserDate={this.state.user}/>
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
