import React from 'react'
import './Navbar.css'

function Navbar() {
  return (

      <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded bg-light sticky-top" >
        <div className="container-fluid">
          <a className="navbar-brand " href="/"><span className='NavText'>Digital Academy</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" color="success" variant="outline">
                <a className="nav-link active"  aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item"  color="success" variant="outline">
                <a className="nav-link active" aria-current="page" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/it_staff">PWD Picture</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default Navbar