import React, {Component} from "react";

class Files extends Component {
    render() {
        return (

            <div className="card" style={{margin: '10px 0px'}}>
                <section className="card-header d-flex justify-content-between">
                    <h5>File Name</h5>
                    <a href='#'>download</a>
                </section>
                <div className="card-body">
                    <h5 className="card-title">File SnapShot</h5>
                    <p className="card-text"><small className="text-muted">Publish at : 3 mins ago</small></p>
                    <button className="btn btn-danger">Delete File</button>
                </div>
            </div>
        )
    }
}

export default Files
