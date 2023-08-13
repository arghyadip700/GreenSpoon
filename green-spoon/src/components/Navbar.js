import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    let location = useLocation();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    
    
    React.useEffect(() => {
      console.log(location.pathname);
    }, [location]);

   
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">CommonHome</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/rest_home">RestHome</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ngo_home">NgoHome</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
       
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>




        
        {isAuthenticated?(
         
          
  <li class="nav-item d-flex">
     
     <li className='m-2 text-success fw-bold'>{user.name}</li> 
  <button type="button" class="btn btn-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
Log Out
</button>

</li>

):(
  <li class="nav-item">
  <button type="button" class="btn btn-info" onClick={() => loginWithRedirect()}>Log In</button>
  </li>

  
    
)}

  
</ul>

     
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar