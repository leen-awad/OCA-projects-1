
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import student from "../data/student"
import Card from "./card"
import React, { Component } from 'react';
import Slider from '@bit/akiran.react-slick.slider';
const Pers = student.map((item) => <Card   job={item.job}  cover={item.cover}/>);




export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
				autoplay:true ,
      responsive: [
        {
          breakpoint: 1172,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
					
          }
        },
        {
          breakpoint: 872,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container">
          <h3 className='OurServHome'>Our services</h3>
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
       
        <Slider {...settings}>
         
      {Pers}
         
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
 
  width: 85vw;
}

.slick-next:before, .slick-prev:before {
    color: #000;
}
`





// export default function Slider() {
//     return (
//         <div class="carousel-wrapper">
//             <Carousel  infiniteLoop useKeyboardArrows autoPlay>
//              <div className="ahmad">

//               {Pers}
             
//              </div>
//              {/* <div className="ahmad">

// {Pers}
// </div> */}
           
//             </Carousel>
//         </div>
//     );
// }


// function Slider() {
//     return (
//       <div className="App">
//   <Home/>
//       </div>
//     );
//   }
  
//   export default Slider;