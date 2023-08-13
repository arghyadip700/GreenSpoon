import React ,{useState,useContext} from 'react'
import CountUp from 'react-countup'
import cha from './all-img/Charity-in-People.webp'
import { useAuth0 } from "@auth0/auth0-react";
import userContext from "./context/user/userContext";
function ComHome() {
  const context = useContext(userContext);
  const {adduser} = context;
  const [User,setUser] = useState({name:"",email:"",type:""})

  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated,isLoading } = useAuth0();
  const handleclick =(e)=>{
    e.preventDefault();
    if(isAuthenticated){
    setUser({name:user.name,email:user.email,type:"true"})}
    adduser(User);
  }
  const handleclickR =(e)=>{
    e.preventDefault();
    if(isAuthenticated){
    setUser({name:user.name,email:user.email,type:"false"})}
    adduser(User);
  }
  console.log(User);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
 
  return (
    <>
    <div >
      
      <img src={cha} className="d-block w-100 " alt="..." style={{ opacity: "0.8", objectFit: "cover", height: "100%" }}/>
    </div>
   
      <div className=" rules  row m-4  ">
     
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex   Rule-ngo-res">
     
  <div className="card-body  d-flex flex-column justify-content-center ">
    <h5 className="card-title m-2 d-flex  justify-content-center">Guide For NGOs</h5>
    <p className="card-text m-2 p-2">
    <ul>
      <li>Don't have an account? Create your NGO account by Signing Up.</li>
      <li>Log into Green Spoon.</li>
      <li>You can see the available food items here.</li>
      <li>Contact with the donating restaurant and collect the food.</li>
      <li><strong>Please remember the food is not for sale</strong></li>
      </ul>
    </p>
    {isAuthenticated?(
    <a href="#" class="btn btn-primary" onClick={handleclick}>Go somewhere</a>):
    (<a href="#" dis class="btn btn-primary " onClick={() => loginWithRedirect()}>Collect Food</a>)}
  </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex   Rule-ngo-res">
        
  <div className="card-body d-flex flex-column justify-content-center">
    <h5 className="card-title m-2 d-flex  justify-content-center">Guide For RESTAURENTS</h5>
    <p className="card-text m-2 p-2">
      <ul>
      <li>Don't have an account? Create your restaurant account by Signing Up.</li>
      <li>Log into Green Spoon.</li>
      <li>Select the type of food items you want to donate.</li>
      <li>Add the name of food item with Quantity and Expiry time.</li>
      <li>Wait for nearby NGOs to contact you and donate the food for a good cause</li>
      </ul> 
    </p>
    {isAuthenticated?(
    <a href="#" class="btn btn-primary" onClick={handleclickR}>Go somewhere</a>):
    (<a href="#" dis class="btn btn-primary " onClick={() => loginWithRedirect()}>Start Charity</a>)}
  </div>
        </div>    
      </div>
      <div className=" head  justify-content-center d-flex m-1 p-1">   OUR IMPACT</div>
      <div className=" our-impact  row m-2 p-5 ">
     
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex  justify-content-center heading">
          <div className="d-flex flex-column ">
           <div className="num d-flex  justify-content-center">
            <CountUp start={0} end={50} duration={2} delay={0}/>
            +</div>
           <div className="num-name d-flex  justify-content-center">NGOS</div>
           <div className="num-name-title d-flex  justify-content-center">Arround Kolkata are connected with us.</div>

          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 d-flex  justify-content-center heading">
          <div className="d-flex flex-column ">
           <div className="num d-flex  justify-content-center"><CountUp start={0} end={100} duration={2} delay={0}/>+</div>
           <div className="num-name d-flex  justify-content-center">RESTAURENTS</div>
           <div className="num-name-title d-flex  justify-content-center">Arround Kolkata are connected with us.</div>
          </div>
        </div>
       
        
      </div>
    </>
  )
}

export default ComHome