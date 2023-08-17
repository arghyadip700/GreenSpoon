import React,{useState,useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    let location = useLocation();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated,isLoading } = useAuth0();
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
    if (isLoading) {
      return <div></div>;
    }
   
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
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/rest_home">RestHome</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ngo_home">NgoHome</a>
        </li>  */}

        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
       
        </li> */}
        
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}




        
        

  
</ul>

     
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
        {isAuthenticated?(
         <li className="nav-item d-flex" style={{listStyle: "none"}}>
            <li className='m-2 text-success fw-bold' style={{listStyle: "none"}}>{user.email}</li> 
         <button type="button" className="btn btn-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
       Log Out
       </button>
       </li>
       
       ):(
         <li className="nav-item" style={{listStyle: "none"}}>
         <button type="button" className="btn btn-info" onClick={() => loginWithRedirect()}>Log In</button>
         </li>
       
         
           
       )}
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar