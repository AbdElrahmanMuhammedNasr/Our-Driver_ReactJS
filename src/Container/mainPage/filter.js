import React, {Component} from 'react'

class Filter extends Component{
    render() {
        return(
            <div className="m-3" style={{width:'30%'}}>
                <form className="form-inline my-2 my-lg-0" className="d-flex justify-content-start">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search By Name or Type" aria-label="Search" />
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" style={{marginLeft:'10px'}}>Search</button>
                </form>
            </div>
        )
    }
}
export default  Filter;
