import React, {Component} from "react";

class AddNewFile extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center  text-white">
                <form className="p-3"
                      style={{
                          width: "70%",
                          border: '2px solid gray',
                          boxShadow: '0px 0px 10px black',
                          margin: '8vh 0px',
                          borderRadius: '15px'
                      }}>
                    <div className="form-group m-3">
                        <label>File Name</label>
                        <input type="text" className="form-control bg-dark text-white" placeholder="please enter file name"/>
                    </div>


                    <div className="form-group m-3">
                        <label>SnapShot</label>
                        <textarea style={{minHeight: '500px'}} type="text" className="form-control  bg-dark text-white"
                                  placeholder="please enter  snapshot about your file"></textarea>
                    </div>

                    <div className="form-group m-3">
                        <label>File</label>
                        <input type="file" className="form-control  bg-dark text-white"/>
                    </div>

                    <div className="form-group m-3">
                        <label>Type</label>
                        <select className="form-control  bg-dark text-white">
                            <option selected>Choose...</option>
                            <option>Movie</option>
                            <option>File</option>
                            <option>Course</option>
                            <option>image</option>
                        </select>
                    </div>


                    <button className="btn btn-primary">Push File</button>

                </form>
            </div>
        )
    }
}

export default AddNewFile;
