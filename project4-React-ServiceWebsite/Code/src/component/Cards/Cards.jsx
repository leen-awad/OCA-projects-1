import React, { Component } from 'react'
import Card from "./cardsUi"
import service from "./Data"

const CardItem = service.map((item) => <div>
    <Card
        imgsrc={item.imge}
        title={item.title}
        price={item.price}
        description={item.description}

    />
</div>);

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="centerCardLeen">
                <div className="containerLeen">
                    {CardItem}
                </div>

            </div>


        );
    }

}
export default Cards;