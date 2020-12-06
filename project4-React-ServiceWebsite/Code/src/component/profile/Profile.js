import './prof.scss';
import React from 'react';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import Must from "../must"
// import Nav from '../nav/nav'


import ServProf from './ServProf';

// import images
import profPic from './img/profimg.jpg';
// import Image from './img/pic/asian-l.jpg';





function Profile(props) {

    const jsonObj = JSON.parse(localStorage.getItem('email'));



    // const SerInfo = [
    //     {
    //         imgsrc: Image,
    //         title: 'Batata',
    //         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem quaerat, consequatur corrupti voluptate eos quidem labore delectus commodi tempore velit vel, molestias quia. Facere totam ex harum autem saepe?
    //         ` ,


    //     },
    //     {
    //         imgsrc: Image,
    //         title: 'Batata',
    //         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem quaerat, consequatur corrupti voluptate eos quidem labore delectus commodi tempore velit vel, molestias quia. Facere totam ex harum autem saepe?
    //         ` ,


    //     },
    // ]


    function logout() {
        localStorage.removeItem("email");
        window.location = "/login"
    }


    return (

        localStorage.getItem('email') ? <div className="center-profile">
            <div className="profileb">
                <div className="profile-cover">

                </div>
                <div className="profile-pic">
                    <div className="imgBorder">
                        <div className="edit-Profile-pic">
                            <p>Edit</p>
                        </div>
                        <img src={profPic} alt=" Profile " />

                    </div>
                </div>
                <div className="name">
                    <h1>
                        {jsonObj.firstName} {jsonObj.lastName}
                    </h1>
                </div>

                <div className="info-Profile">
                    <p>
                        {jsonObj.email}
                    </p>

                </div>

                <div className="changeInfo">

                    <div className="editorsBtn">

                        <div onClick={logout} className="Change">
                            <i class="fas fa-lock"></i>
                            <p>LogOut</p>
                            <div className="lineProf-s"></div>


                        </div>

                    </div>
                    <div className="lineProf"></div>

                </div>


                <div className="Profile-Servises">
                    {props.SerInfo.map((card) => (
                        <ServProf image={card.imgsrc} name={card.title} disc={card.description} price={card.price} />
                    )

                    )}

                </div>

                <div className="weatherDiv">
                    <ReactWeather
                        forecast="today"
                        apikey="1d1dcc0f630ae169ecc95c0496c8a00c"
                        type="city"
                        city="Amman" />

                </div>


            </div>




        </div>
            : <Must />

    );
}

export default Profile;
