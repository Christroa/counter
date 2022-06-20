import React, { useState } from "react";
import pics from "./assets/mypic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebook } from "@fortawesome/free-brands-svg-icons";
const App = () => {
  const [username, setUsername] = useState("You details will display here");
  const [name, setName] = useState("You details will display here");
  const update = () => {
    let fname = document.querySelector("#firstname");
    let lname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let username = document.querySelector(".username");
    let name = document.querySelector(".name");
    username.textContent = setUsername(`Your email is ${email.value}`);
    name.textContent = setName(`Your name is ${fname.value} ${lname.value}`);
  };
  return (
    <div>
      <div className="fromCard">
        <div className="pic">
          <div className="cont">
            <h2>Listen to your music</h2>
            <h3>For free</h3>
          </div>
          <img src={pics} />
          <p className="details username">{username}</p>
          <p className="details name">{name}</p>
        </div>
        <form>
          <div className="container">
            <div className="inputs fname">
              <label for="firstname">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="inputs lname">
              <label for="lastname">Last Name</label>
              <input type="text" id="lastname" />
            </div>
            <div className="inputs email">
              <label for="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="inputs password">
              <label for="peassword">Password</label>
              <input type="text" id="peassword" />
            </div>
            <div className="inputs rpassword">
              <label for="reenter">Re-enter password</label>
              <input type="text" id="reenter" />
            </div>
          </div>
          <span>
            <input type="checkbox" />{" "}
            <i>
              i have read and agree with the Terms of Service and our Privacy
              Policy
            </i>
          </span>
          <button className="reg btn" onClick={update} type="button">
            Sign Up
          </button>
          <i>OR</i>
          <div className="other">
            <button className="google btn">
              <FontAwesomeIcon icon={faGooglePlusG} />
              Sign up with Google
            </button>
            <button className="fb btn">
              <FontAwesomeIcon icon={faFacebook} />
              Sign Up with Facebook
            </button>
          </div>

          <p className="last">
            Don't have an accouny? <i>sign up</i>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
