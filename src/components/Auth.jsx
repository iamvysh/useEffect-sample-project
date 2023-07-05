import React, { useContext } from "react";
import Authcontext from "../helpers/Authcontext";

const Auth = () => {
  const Autho = useContext(Authcontext);

  return (
    <div>
      <h1>Are you authenticated?</h1>
      {Autho.status ? <p>Yes you are</p> : <p>Nopes</p>}

      <button onClick={Autho.login}>Click To Login</button>
    </div>
  );
};

export default Auth;
