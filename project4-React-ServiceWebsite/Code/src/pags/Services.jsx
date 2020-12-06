import React from "react"
import service from "../component/Cards/Data"
import Card from "../component/Cards/cardsUi"
import YoutubeAPI from '../component/YouTube/youtube';



const CardItem = service.map((item) => <div>
  <Card
    imgsrc={item.imge}
    title={item.title}
    price={item.price}
    description={item.description}

  />
</div>);

export default class Services extends React.Component {

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


  render() {




    return (

      <div className="centerCardLeen">
        <div className="containerLeen">
          {CardItem}

          <YoutubeAPI />
        </div>

      </div>
    )

  }




}