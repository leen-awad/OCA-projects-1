import React from "react";
import "./style.scss"


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  //  getData(){
  //    let data =sessionStorage.getItem('Data')
  //    data=JSON.parse(data)
  //    console.log(data )

  //  }



  setData() {
    let obj = {

      email: this.state.email,
      password: this.state.password
    }

    if (localStorage.getItem(obj.email)) {
      if (obj.password === JSON.parse(localStorage.getItem(obj.email)).password) {
        window.location = "/profile";
        const myObj = JSON.parse(localStorage.getItem(obj.email));
        localStorage.setItem('email', JSON.stringify(myObj));

      } else {
        alert("password Wrong");
      }

    } else {
      alert('email not found');
    }

    // localStorage.getItem(obj.email) ? obj.password == JSON.parse(localStorage.getItem(obj.email)).password ? 

    // {
    //   alert("success");
    //   const myObj = JSON.parse(localStorage.getItem(obj.email));
    //   localStorage.setItem('email', myObj);

    // }
    // : alert("password Wrong") : alert("no");

  }



  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };




  render() {
    const { formErrors } = this.state;
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div className="log-header">Login</div>
        <div className="content">
          <div className="image">
            <img src="https://static.fullestop.com/images/doctor-appointment.svg" alt='doctor appointment' />
          </div>
          <div className="form">

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                // placeholder="Email"
                type="email"
                name="email"
                required
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                // placeholder="Password"
                type="password"
                name="password"
                required
                onChange={this.handleChange}
              />



              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={() => this.setData()} type="button" className="t-btn">
            login
          </button>
        </div>
      </div>



    );
  }
}

export default Login