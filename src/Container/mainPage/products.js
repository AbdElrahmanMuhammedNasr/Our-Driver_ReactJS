import React, {Component} from 'react'
import Filter from "./filter";

class Products extends Component {
    render() {
        return (
            <div>
                <Filter/>


                <table className="table table-borderless table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">SnapShot</th>
                        <th scope="col">User</th>
                        <th scope="col">Download</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products;
