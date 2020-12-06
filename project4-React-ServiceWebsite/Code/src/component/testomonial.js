import abed from '../img/abed.png';

import monther from '../img/monther.png';


import osama from '../img/osama.png';

import jasem from '../img/jasem.png';



export default function Testomonilan(){

    var i =1;
    function nex(){
        var $inputs = document.getElementsByName("slidest");
        setInterval(function() {
            $inputs[i].checked = true
            i++;
           if(i===4){
               i=0;
           }
        }, 8000);

      
    }

    return(
      



<div className="carrouselt">
      <h2 onClick={nex()}>"Testimonial"</h2>
      <input type="radio" name="slidest" id="radio-1t" />
      <input type="radio" name="slidest" id="radio-2t" />
      <input type="radio" name="slidest" id="radio-3t" />
      <input type="radio" name="slidest" id="radio-4t" />
      <ul className="slidest">
        <li className="slidet">
          <p>
            
            <em >"I am writing this letter to thank everyone at your wonderful website for the excellent care" </em>
            <span className="author">
              <img src={abed} alt='Abdulrahman' />
              Abdulrahman
              </span>
          </p>
        </li>
        <li className="slidet">
          <p>
            <em>"I recently found myself under your care for a cardiac issue.  staff at Vein was exceedingly "</em>
            <span className="author">
              <img src={monther} alt=' Monther Twaisy' />
                 Monther Twaisy
                </span>
          </p>
        </li>
        <li className="slidet">
          <p>
            <em>"I am writing to express my gratitude from my family for the care given to my mother." </em>
            <span className="author">
              <img src={osama} alt='Osama' />
                Osama
                </span>
          </p>
        </li>
        <li className="slidet">
          <p>
            <em>"All of the doctors and nurses were friendly, pleasant, conscientious and professional."</em>
            <span className="author">
              <img src={jasem} alt=' M. Jasem' />
              M. Jasem
              </span>
          </p>
        </li>
      </ul>
      <div className="slidesNavigationt">
        <label for="radio-1t" id="dotForRadio-1t"></label>
        <label for="radio-2t" id="dotForRadio-2t"></label>
        <label for="radio-3t" id="dotForRadio-3t"></label>
        <label for="radio-4t" id="dotForRadio-4t"></label>
      </div>
    </div>
        
    )
}