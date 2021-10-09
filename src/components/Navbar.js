import React, { Component } from 'react'
import pic from './brand-logo.png'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

export class Navbar extends Component {
    statter = ()=>{
      let query = document.getElementById("searcher").value;
      this.props.liftStateUp(query);
      
      this.props.history.push('/search');
      
    }

    render() {
        return (
            <div id = "navbar-logoset">
                <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/"><img src = {pic} alt = "load"/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item font-weight-bold">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item font-weight-bold">
                        <Link className="nav-link" to="/shows">TV Shows</Link>
                      </li>
                      <li className="nav-item font-weight-bold">
                        <Link className="nav-link" to="/movies">Movies</Link>
                      </li>
                      
                     
                      
                      
                    </ul>
                    <form className="d-flex">
                      <input className="form-control me-2" id = "searcher"  type="search"  placeholder="Search" aria-label="Search" required/>
                      <button className="btn btn-outline-success" onClick = {this.statter} type="button">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)
