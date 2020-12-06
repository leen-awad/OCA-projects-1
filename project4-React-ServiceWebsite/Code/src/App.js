import './App.css';

import Home from "./pags/home"
// import Card from "./component/card"
import Slider from "./component/slider"
import Nav from "./component/nav/nav"
import Footer from "./component/footer/footer"
import Testomonilan from "./component/testomonial"
import Cards from "./component/Cards/Cards"
import ProfileCards from './component/Dev/ProfileCards';
import "./component/Dev/styles/profileCard.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Profile from "./component/profile/Profile"
import Login from "./component/login/login/App"
import Services from "./pags/Services"
import Booking from "./pags/Booking"

// import {SerInfo} from "./component/profile/Profile"

function App() {
  //  Profile.SerInfo = 

  // localStorage.setItem("my",JSON.stringify([{
  //   image: Image,
  //   name: 'ahmad',
  //   disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem quaerat, consequatur corrupti voluptate eos quidem labore delectus commodi tempore velit vel, molestias quia. Facere totam ex harum autem saepe?
  //   ` ,


  // },
  // {
  //   image: Image,
  //   name: 'bdooooor',
  //   disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem quaerat, consequatur corrupti voluptate eos quidem labore delectus commodi tempore velit vel, molestias quia. Facere totam ex harum autem saepe?
  //   ` ,


  // }, ]))

  const SerInfo = JSON.parse(localStorage.getItem("my")) ? JSON.parse(localStorage.getItem("my")) : [];
  const land = (
    <div >

      <Home />
      <div className="Qout">
        <i>"   Compassion lives here, care that lasts a lifetime  "</i>
      </div>
      <Slider />

      <div className='HideServicesHome'>

        <Cards />

      </div>

      <Testomonilan />

      <ProfileCards />
      <div className="contactus">
        <div className="formtext">
          <h1>Let's Talk</h1>
          <h2>Feel Free to Write a Message</h2>

        </div>
        <div className="form-app">

          <input placeholder="Name" type="text" />
          <div className="med">
            <input placeholder="Email" type="email" />
            <input placeholder="Mobile" type="tel" />

          </div>
          <textarea placeholder="Message" />
          <div className="contactusBtn"> Submit</div>
        </div>
      </div>


      {/* #2D2D2D */}
    </div>
  )
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route path="/" exact render={() => land} />
        <Route path="/profile" render={() => <Profile SerInfo={SerInfo} />} />
        <Route path="/Services" component={Services} />
        <Route path="/Booking" component={Booking} />

        <Route path="/login"

          render={props => {
            if (!localStorage.getItem("email")) {
              return <Login />;
            } else {

              return <Profile SerInfo={SerInfo} />;

            }
          }}
        />

      </Router>





      <Footer />

    </div>
  );
}

export default App;
