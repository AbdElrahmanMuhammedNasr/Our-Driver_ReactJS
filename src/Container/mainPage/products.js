import React, {Component} from 'react'
import Filter from "./filter";
import {NavLink} from "react-router-dom";

class Products extends Component {

    state = {
        products: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1,1],
        userEmail:'user@gmail.com',
    }

    downloadFile = () => {
        console.log("DOwnload")
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Filter/>


                <table className="table table-borderless table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">SnapShot</th>
                        <th scope="col">Type</th>
                        <th scope="col">User</th>
                        <th scope="col">Date</th>
                        <th scope="col">Download</th>
                    </tr>
                    </thead>
                    <tbody>


                    {
                        this.state.products.map(e => {
                            return (
                                <tr key={Math.random()}>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><NavLink to={{pathname: '/profile/'+this.state.userEmail+'/files'}}>User</NavLink></td>

                                    <td>@mdo</td>


                                    <td onClick={this.downloadFile}><a
                                        style={{color: 'lightblue', cursor: 'pointer'}}>download</a></td>
                                </tr>

                            )
                        })
                    }

                    </tbody>

                </table>
            </div>
        )
    }
}

export default Products;
