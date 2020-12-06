import './Booking.css';
import Must from "../component/must"
import card from "../img/card.png"

// import {UserContext} from './UserContext'
// import Must from "./must"

// function login(){

//     sessionStorage.setItem("test",JSON.stringify({name:"ahmad", id : "1", password:"123456"}))

// alert(JSON.parse(sessionStorage.getItem("test")).name)
// }


// const islogin1 = (sessionStorage.getItem("islogin"))


var prevdata = JSON.parse(localStorage.getItem("my")) ? JSON.parse(localStorage.getItem("my")) : [];
var islogin = false

if (localStorage.getItem("email")) {
    islogin = true
}

function Booking() {
    const data = JSON.parse(localStorage.getItem("myServices"))

    // const  islogin  = useContext(UserContext);

    // function ch(){

    //     setLogin(sessionStorage.getItem("islogin"))
    // } 

    function done() {


        prevdata.push(data)

        // var newAryy = [prevdata,data]

        // prevdata = prevdata.push({name:"ahmad" , last:"ahmad"}) 
        localStorage.setItem("my", JSON.stringify(prevdata))
        // alert(JSON.stringify(prevdata))
        // if (prevdata){
        //     prevdata= prevdata + data
        // }


    }

    return (


        <div> {islogin ? <div className="bookingContainer">
            <div className="itema">
                <img src={data.imgsrc} alt="" />
                <div className="infoa">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>

                    <h4>{data.price}</h4>


                </div>

            </div>
            <article className="form6 cid-si0EjxJmy2" id="form6-w">


                <div className="containera">
                    <div className="mbr-section-head">
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong >Payment</strong>
                        </h3>

                    </div>

                    <div className="myrow justify-content-center mt-4">
                        <img style={{ width: "150px" }} src={card} alt='card' />
                        <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                            <form onSubmit={done} action="#popup1" method="get" id="myform" className="mbr-form form-with-styler mx-auto" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" />
                                <div className="">
                                    <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling
                         out the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">Oops...! some
                         problem!</div>
                                </div>
                                <div className="dragArea row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="name">
                                        <input required type="text" name="name" placeholder="Name" data-form-field="name" className="form-control" id="name-form6-w" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group" data-for="email">
                                        <input required type="number" placeholder="Card number" maxlength="15" data-form-field="email" className="form-control" id="email-form6-w" />
                                    </div>
                                    <div data-for="phone" className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input required type="text" maxLength="3" placeholder="CVV" maxlength="15" data-form-field="email" className="form-control" id="email-form6-w" />
                                    </div>
                                    <div className="col-auto mbr-section-btn align-center">
                                        <button className="btn btn-primary display-4">Submit</button>

                                    </div>
                                </div>
                                <div id="popup1" class="overlay">
                                    <div class="popup">
                                        <h2>purchased successflly</h2>
                                        <a class="close" href="/profile">&times;</a>
                                        <div class="content">
                                            Thank to purchased our service , you can find purchaseds on your profile.
                                           <div className="">
                                                <a className='DoneBTN ' href="/profile" >
                                                    <p style={{ color: '#fff' }}>Done</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </article>

        </div>

            : <Must />}  </div>

    );

}



export default Booking;
