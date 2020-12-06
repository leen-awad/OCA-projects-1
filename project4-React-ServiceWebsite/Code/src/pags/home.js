import intro from "../media/video.mp4"


function Home() {
    return (
     <div className="homConatiner">
         <video  loop muted autoPlay >
  <source  src={intro} type="video/mp4"/>
Your browser does not support the video tag.
</video>
           
{/* <Slider/> */}
     </div>
    );
  }
  
  export default Home;
  