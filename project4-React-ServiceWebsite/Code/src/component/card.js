// import whatsapp from "./img/wahtsapp.png"
// import Facebook from "./img/facebook.png"
// import Insta from "./img/insta.png"
// import edit from "./img/edit.png"


export default function Card(props) {


  return (

    <div onClick={() => window.location = "/services"} className="card">

      <img className='cover' src={props.cover} alt='Cover'>

      </img>

      <div className="info">

        <h2>{props.name}</h2>
        <b>{props.address}</b>
        <h3>{props.job}</h3>
        <p>{props.desc}
        </p>
      </div>

    </div>
  );
}
