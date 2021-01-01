import './App.css';
import Header from "../Container/header";
import Footer from "../Container/footer";
import Profile from "../Container/user/profile";
import Products from "../Container/mainPage/products";
import {Redirect, Route} from "react-router";
import Login from "../Container/Auth/login";
import SignUp from "../Container/Auth/signUp";

function App() {
    return (
        <div className="App" style={{'font-family': ''}}>
            <Header/>

            <div style={{'width': '100%', minHeight: '83vh', 'margin': '0px 0px', padding: '0px'}}>

                <Route path={"/login"} component={Login}/>
                <Route path={"/signUp"} component={SignUp}/>
                <Route path={"/home"} component={Products}></Route>
                <Route path={"/profile/:email"} component={Profile}></Route>

                <Redirect from="/" to="/home"/>

            </div>

            <Footer/>
        </div>
    );
}

export default App;

