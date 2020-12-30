import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (

            <footer className="bg-light text-center text-lg-start bg-dark text-white" >

                <div className="container p-4">

                    <div className="row">

                        <div className="col-12">
                            <h5 className="text-uppercase">At the End</h5>

                            <p>
                                i create this website to help each other
                            </p>
                        </div>


                    </div>

                </div>


                <div className="text-center p-3" style={{'background-color': 'rgba(0, 0, 0, 0.2)'}}>
                    &copy; 2020 Copyright :
                    <snap className="text-white"> helpHuman</snap>
                </div>

            </footer>

        )
    }
}

export default Footer
