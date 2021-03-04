import React,{useState} from 'react';
import {Btn, Slide,Slides } from './Silder.elements';
import Testimonial from './Testimonial';
import image_five from "../../images/image_five.jpg";
import image_six from "../../images/image_six.jpg";
import image_seven from "../../images/image_seven.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const Slider = () => {
let sliderArr= [
    <Testimonial src={image_five} name={"Edwin Epperson"} occ={"HR Manager"}/>,
    <Testimonial src={image_six} name={"Jhon Doe"} occ={"Accountant"} />,
    <Testimonial src={image_seven} name={"Sarah Smith"} occ={"Director"}/>
];
const [x,setX] = useState(0);
const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
   
};
const goRight = () => {
    x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
};
    return (
        <>
        <Slides>

            {sliderArr.map((item, index) =>{
                return(
                    <Slide key={index}  style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </Slide>
                );
            })}
            <Btn>
            <FaArrowAltCircleRight className="ArrowRight" onClick={goRight} />
            <FaArrowAltCircleLeft className="ArrowLeft" onClick={goLeft} />
            </Btn>


            </Slides>
        </>
    )
}

export default Slider;
