import React, {Component} from "react";
import axios from "axios";

class Files extends Component {
    state = {
        files: [],
        numberOfFiles:0,
        owner: true
    }

    componentDidMount() {
        const ownerEmail = localStorage.getItem("loginEmail");
        const email = this.props.match.params.email;
        this.setState({
            ...this.state,
            owner: email === ownerEmail
        })

        axios.get('/file/getUserFile/' + email)
            .then(r => {
                if (r.status === 200) {
                    console.log(r.data)
                    this.setState({
                        ...this.state,
                        files: r.data.files,
                        numberOfFiles: r.data.beta.number

                    })
                }

            }).catch(err => {
            console.log(err)
        })
    }

    onDeleteFile(id) {
        axios.delete("/file/deleteFile/" + id)
            .then(r => {
                console.log(r)
                this.componentDidMount();
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <section>
                <strong className="text-white">Files Number {this.state.numberOfFiles}</strong>
                {
                    this.state.files.map(e => {
                        return (
                            <div className="card bg-dark text-white"
                                 style={{margin: '15px 0px', border: '1px solid black'}}>

                                <section key={Math.random()} className="card-header d-flex justify-content-between">
                                    <h5>{e.name}</h5>
                                    <a href='#'>download ( {e.downloadNum} ) </a>
                                </section>
                                <div className="card-body">
                                    <h5 className="card-title">{e.snapShot}</h5>
                                    <p className="card-text"><small className="text-muted">Publish at
                                        : {e.createAt.slice(0, 10)}</small>
                                    </p>
                                    {
                                        this.state.owner ? <button className="btn btn-danger" onClick={() => {
                                                this.onDeleteFile(e._id)
                                            }}>Delete File</button>
                                            : null
                                    }
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
