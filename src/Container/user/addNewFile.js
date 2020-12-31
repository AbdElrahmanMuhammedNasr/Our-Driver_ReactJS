import React, {useState} from "react";

const AddNewFile = (props) => {
    const [name, setName] = useState('');
    const [snapshot, setSnapshot] = useState('');
    const [file, setFile] = useState('');
    const [type, setType] = useState('');

    const addNewFile = (event) => {
        event.preventDefault();
        console.log(name)
        console.log(snapshot)
        console.log(file)
        console.log(type)
    }

    return (
        <form onSubmit={addNewFile} method="POST">
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
                        <input type="text" className="form-control  " placeholder="please enter file name" value={name}
                               onChange={({target}) => setName(target.value)}/>
                    </div>


                    <div className="form-group m-3">
                        <label>SnapShot</label>
                        <textarea style={{minHeight: '200px'}} type="text" className="form-control "
                                  placeholder="please enter  snapshot about your file" value={snapshot}
                                  onChange={({target}) => setSnapshot(target.value)}> </textarea>
                    </div>

                    <div className="form-group m-3">
                        <label>File</label>
                        <input type="file" className="form-control" value={file}
                               onChange={({target}) => setFile(target.value)}/>
                    </div>

                    <div className="form-group m-3">
                        <label>Type</label>

                        <input type="tex" className="form-control" value={type}
                               onChange={({target}) => setType(target.value)}/>

                    </div>


                    <button className="btn btn-primary" type="submit">Push File</button>

                </section>
            </div>
        </form>
        )

}

export default AddNewFile;
