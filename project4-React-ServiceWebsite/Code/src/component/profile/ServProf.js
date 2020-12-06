import './prof.scss';
import React from 'react';
import 'react-open-weather/lib/css/ReactWeather.css';

// import images


function Service(props) {

    return (
        <div className="Serv">
            <div className="Service-Pic">
                <img src={props.image} alt="batata" />
            </div>
            <div className="serv-Disc">
                <h3>{props.name}</h3>
                <p>
                    {props.disc}
                </p>

                <h3 style={{color:"green"}}>Purchased</h3>

            </div>
        </div>

    );
}

export default Service;





