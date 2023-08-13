import React,{useState,useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    let location = useLocation();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    const [useremail,setemail] = useState('');
    useEffect(()=>{
      if(isAuthenticated){
        setemail(user.email);
       
      }
    },[isAuthenticated,user]);
    console.log(useremail);
    React.useEffect(() => {
      console.log(location.pathname);
    }, [location]);

   
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Green Spoon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/rest_home">Restaurant</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ngo_home">NGO</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About Us</a>
        </li>
        {isAuthenticated?(
  <li class="nav-item d-flex">
     <li className='m-2 text-success fw-bold'>{user.email}</li> 
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
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar