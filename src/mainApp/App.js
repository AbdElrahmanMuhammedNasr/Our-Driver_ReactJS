import './App.css';
import Header from "../Container/header";
import Footer from "../Container/footer";
import Profile from "../Container/user/profile";
import Products from "../Container/mainPage/products";
import {Route} from "react-router";

function App() {
    return (
        <div className="App" style={{'font-family': ''}}>
            <Header/>
            {/*<div className="container jumbotron text-white bg-dark p-2 "*/}
            {/*     style={{'margin': '10px auto', 'border-radius': '10px'}}>*/}
            {/*    <strong className="display-6">Hello!</strong>*/}
            {/*    <p className="lead">This is Our Website to share.</p>*/}
            {/*    <hr className="my-4"/>*/}
            {/*    <p>this site aim to share your staff with there user and the can download it if they need it.</p>*/}
            {/*</div>*/}


            <div className="row" style={{'width': '100%', 'margin': '0px 0px'}}>

                <section className="col-sm-12">
                    <Route path={"/home"} component={Products} ></Route>
                    <Route path={"/profile"} component={Profile} ></Route>

                </section>

            </div>

            <Footer/>
        </div>
    );
}

export default App;

