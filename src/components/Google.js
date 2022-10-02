import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

import axios from "axios";

import { API_URL } from "./constants";

function App () {
  const [user, setUser] = useState({});



  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    const guser ={
      name : userObject.name,
      email : userObject.email,
    }
    // console.log(guser);
    axios.post(API_URL, guser)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }



  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }


  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id : "35930829354-tkpfrg6frsdnt4b8eh79iu8jtdbaupq1.apps.googleusercontent.com",
      callback : handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline" , size: "large" }
    );

    google.accounts.id.prompt();
  }, []);
  

  return (
    <div className="App">
      <div id="signInDiv"></div>

      {user &&
        <div>
          <img src = {user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
      {  Object.keys(user).length != 0 &&
         <button onClick={(e) => handleSignOut(e)}>Sign Out</button>      
      }
    </div>
  );
}

export default App;