import React , {useState} from 'react'
import signup from "../images/signup.svg";
import {NavLink ,useNavigate} from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });

  let name,value;
  const handleInputs = (e) => {
    name=e.target.name;
    value=e.target.value;

    setUser({ ...user , [name]:value});

  }

  const PostData = async (e) =>{
    e.preventDefault();

    const { name,email,phone,password,cpassword } =user;

    const res = await fetch("/register" , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,phone,password,cpassword
      })
    });
    const data = await res.json();
    if(res.status === 422 || res.status === 400 ||
      res.status === 401 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    } else{
      window.alert("Succesfull Registration");
      console.log("Succesfull Registration")

      navigate("/login");
    }

  }


    return (
        <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label for="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="off"
                    placeholder="Your Name"
                    onChange={handleInputs}
                    value={user.name}
                    
                  />
                </div>
                <div className="form-group">
                  <label for="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="off"
                    placeholder="Your Email"
                    onChange={handleInputs}
                    value={user.email}
                  />
                </div>
                <div className="form-group">
                  <label for="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autocomplete="off"
                    placeholder="Your Phone"
                    onChange={handleInputs}
                    value={user.phone}
                  />
                </div>
                
                <div className="form-group">
                  <label for="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="off"
                    placeholder="Your Password"
                    onChange={handleInputs}
                    value={user.password}
                  />
                </div>
                <div className="form-group">
                  <label for="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autocomplete="off"
                    placeholder="Confirm Your Password"
                    onChange={handleInputs}
                    value={user.cpassword}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Signup"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signup} alt="registration pic" />
              </figure>
              <NavLink className="signup-image-link" to="/login">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Register
