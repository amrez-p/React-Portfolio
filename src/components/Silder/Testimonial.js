import React from 'react';
import { Section_down_left, Section_down_right,Section_down, Section_Wrap } from './testData';
import {FaQuoteLeft} from 'react-icons/fa';

const Testimonial = ({src,name,occ}) => {
    return (
        <>
        <Section_down>
           <Section_Wrap >
                 <Section_down_right>
                    <img src={src} alt="slide-img" />
               </Section_down_right>  
            <Section_down_left>
                <FaQuoteLeft className="quote"/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Error, in, 
                            reiciendis officiis assumenda, 
                            quis dolores dolore voluptatum 
                            dolorem et incidunt voluptatem 
                            atque deleniti vitae! 
                            Neque soluta optio odit cupiditate 
                            voluptatum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores, dicta fugiat reprehenderit, eligendi facilis quisquam deleniti rerum sint harum architecto sunt. Fugiat minima optio nam omnis sint explicabo unde.
                            Corrupti itaque veniam cum architecto labore quod laudantium. Hic enim dolore ab itaque recusandae alias veritatis cum doloribus vitae. Quam est cumque dolor libero sed delectus dolore explicabo sit odit!
                            Illo unde fugiat voluptatem quae distinctio odio, delectus libero culpa porro laborum quasi vero doloribus tenetur nulla? Molestiae omnis, voluptatum fugit voluptas vel, possimus vero,
                             nesciunt quam sint tenetur nam
                            </p>
                         
                   <h4>{name}</h4>
                   <h4>{occ}</h4>
              </Section_down_left>
            </Section_Wrap>
        </Section_down>
        </>
    )
}

export default Testimonial;
