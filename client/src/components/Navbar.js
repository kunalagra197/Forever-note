import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Link,
    Navigate,
    useLocation
  } from "react-router-dom";
import logo from '../logonote.png'

const Navbar=(props)=>{
  // use to get location found react router dom
  let location=useLocation();
  const navigate=useNavigate();
  useEffect(() => {
    // console.log(location.pathname)
  }, [location])
  const handleLogout=()=>{
    localStorage.removeItem('token')
    props.showAlert("Logged out Successfully","success")
    navigate('/login')
  }

  return (
<nav className="navbar navbar-expand-lg navbar-dark" style={{"background-color":"black"}}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" style={{"font-family":"cursive"}} to="#">Forever Note</Link> */}
    <Link className="navbar-brand" to="#">
      <img src={logo} alt="..." height="inherit"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/' ? "active":""} `}style={{"font-family":"cursive"}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about' ? "active":""} `} style={{"font-family":"cursive"}}aria-current="page" to="/about">About</Link>
        </li>
       
      </ul>
      {/*>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
       */}
      {!localStorage.getItem('token')?<form className="d-flex">
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
      </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar