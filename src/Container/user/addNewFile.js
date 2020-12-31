import React, {Component} from "react";

class AddNewFile extends Component {

    addNewFile = () => {
        console.log("Add")
    }

    render() {
        return (
            <div className="d-flex justify-content-center ">
                <section className="p-3 bg-white"
                         style={{
                             width: "70%",
                             border: '2px solid gray',
                             boxShadow: '0px 0px 10px black',
                             margin: '8vh 0px',
                             borderRadius: '15px'
                         }}>
                    <div className="form-group m-3">
                        <label>File Name</label>
                        <input type="text" className="form-control  " placeholder="please enter file name"/>
                    </div>


                    <div className="form-group m-3">
                        <label>SnapShot</label>
                        <textarea style={{minHeight: '500px'}} type="text" className="form-control "
                                  placeholder="please enter  snapshot about your file"></textarea>
                    </div>

                    <div className="form-group m-3">
                        <label>File</label>
                        <input type="file" className="form-control   "/>
                    </div>

                    <div className="form-group m-3">
                        <label>Type</label>
                        <select className="form-control ">
                            <option selected>Choose...</option>
                            <option>Movie</option>
                            <option>File</option>
                            <option>Course</option>
                            <option>image</option>
                        </select>
                    </div>


                    <button className="btn btn-primary" onClick={this.addNewFile}>Push File</button>

                </section>
            </div>
        )
    }
}

export default AddNewFile;
