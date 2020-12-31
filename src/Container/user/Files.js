import React, {Component} from "react";

class Files extends Component {
    state = {
        files: [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1]
    }

    render() {
        return (
            <section>

                {
                    this.state.files.map(e => {
                        return (
                            <div className="card bg-dark text-white" style={{margin: '15px 0px', border:'1px solid black'}}>

                                <section key={Math.random()} className="card-header d-flex justify-content-between">
                                    <h5>File Name</h5>
                                    <a href='#'>download</a>
                                </section>
                                <div className="card-body">
                                    <h5 className="card-title">File SnapShot</h5>
                                    <p className="card-text"><small className="text-muted">Publish at : 3 mins
                                        ago</small>
                                    </p>
                                    <button className="btn btn-danger">Delete File</button>
                                </div>
                            </div>

                        )

                    })

                }
            </section>


        )
    }
}

export default Files
