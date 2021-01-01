import React, {Component} from 'react'
import Filter from "./filter";
import {NavLink} from "react-router-dom";
import axios from "axios";

class Products extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        axios.get('/file/getInitFiles/' + 10)
            .then(r => {
                if (r.status === 200) {
                    // console.log(r)
                    this.setState({
                        ...this.state,
                        products: r.data.files
                    })
                }

            }).catch(err => {
            console.log(err)
        })
    }

    downloadFile = (id) => {
        axios.get('/file/downloadFile/'+id)
            .then(r=>console.log(r))
            .catch(err=>console.log(err))
        this.setState({
            ...this.state,
            products: this.state.products.map(p => {
                if (p._id === id) {
                    p.downloadNum += 1

                }
                return p
            })
        })
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Filter/>


                <table className="table table-borderless table-striped table-dark">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">SnapShot</th>
                        <th scope="col">Type</th>
                        <th scope="col">User</th>
                        <th scope="col">Date</th>
                        <th scope="col">Download</th>
                        <th scope="col">Downloading</th>
                    </tr>
                    </thead>
                    <tbody>


                    {
                        this.state.products.map(e => {
                            return (
                                <tr key={e._id}>
                                    <th scope="row">{e._id.slice(0, 5) + '...'}</th>
                                    <td>{e.name}</td>
                                    <td>{e.snapShot}</td>
                                    <td>{e.type}</td>
                                    <td><NavLink
                                        to={{pathname: '/profile/' + e.userEmail + '/files'}}>{e.userEmail}</NavLink>
                                    </td>
                                    <td>{e.createAt.slice(0, 10)}</td>
                                    <td><a onClick={() => this.downloadFile(e._id)}
                                           style={{color: 'lightblue', cursor: 'pointer'}}>download</a></td>
                                    <td>{e.downloadNum}</td>
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
