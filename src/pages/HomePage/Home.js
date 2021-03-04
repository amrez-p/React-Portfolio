import React from 'react'
import Slider from '../../components/Silder';
import { Button } from '../../GlobalStyle';
import { 
    Main, 
    Side_right,
    Section,    
    Section_Three,
    Section_three_right,
    Section_three_left } from './Data';

const Home = () => {

    return (
        <>
        
            <Main>
        <Side_right>
            <p class="heading">Your reliable partner</p>
            <h2>We Help Your Business With Our Technology</h2>
            <p>Technology that can give you a better future for your business,your customers
                and your employees.
            </p>
              <Button>Get Started</Button>
        </Side_right>  
      </Main>
     


      <Section>
          <h2>What We Do</h2>
          <p>Technobizz is a mordern consulting firm dedicated to using
              strategy,technology,<br />process to deliver business transformation
          </p>
          <Button>Learn More</Button>
      </Section>
            
               
                  <Slider />
               

      <Section>
          <h2>Innovate Without Limits</h2>
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Nulla illum <br />odio reiciendis nostrum quibusdam nihil ullam fugit. 
              Ex sed doloremque ,<br />cumque, modi quos minus laudantium vero 
          </p>
      </Section>
          

      <Section_Three>
          <Section_three_right>
          <h2>Ready to get started on <br/> your project?</h2>
          </Section_three_right>
          <Section_three_left>
       <input type="email"  className="section_input" placeholder="Enter Your Email" />
          <Button className='section_three_btn'>Let's talk</Button>
          </Section_three_left>
          
    </Section_Three>
        </>
    )
}

export default Home;
