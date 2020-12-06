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

class Register extends React.Component {
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    }




    localStorage.setItem(obj.email, JSON.stringify(obj));
    localStorage.setItem("email", JSON.stringify(obj));
    window.location = "/profile";
    // localStorage.setItem('Data', JSON.stringify(obj))

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

      <div className="form">
        <div className="form-group">
          <div className="log-header CreateAccount">Create Account</div>
          <form className="form1" onSubmit={this.handleSubmit} >
            <div className="image" >
              <img className="image1" src="https://static.fullestop.com/images/doctor-appointment.svg" alt='doctor appointment' />
            </div>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input

                required
                className={formErrors.firstName.length > 0 ? "error" : null}

                type="text"
                name="firstName"

                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input

                className={formErrors.lastName.length > 0 ? "error" : null}

                type="text"
                name="lastName"
                required
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input

                className={formErrors.email.length > 0 ? "error" : null}
                type="email"
                name="email"
                required
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
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


            <div className="createAccount">
              <button onClick={() => this.setData()} type="submit">Create Account</button>



            </div>
          </form>
        </div>
      </div>


    );
  }
}
export default Register;