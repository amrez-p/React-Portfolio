import React from 'react'
import { Foot, Foot_side_left, Foot_side_right, Social_Icons, Social_Link } from './Footer.elements';
import {FaFacebook,FaInstagram,FaTwitter
  } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Foot>
          <Foot_side_left>
              <h2>Technobizz</h2>
               
               <Social_Icons>
                <Social_Link href='/' target='_blank'>
                 <FaFacebook />
              </Social_Link>
              <Social_Link href='/' target='_blank'>
                   <FaInstagram />
              </Social_Link>
              <Social_Link href='/' target='_blank'>
                    <FaTwitter />
              </Social_Link>
               </Social_Icons>
                       
           </Foot_side_left>
          <Foot_side_right>
              <ul>
                  <h3>Product</h3>
                      <li><a href="#">Landing Page</a></li>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Referral Program</a></li>
                      <li><a href="#">Pricing</a></li>
              </ul>
              <ul>
                  <h3>Services</h3>
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Design</a></li>
                      <li><a href="#">Themes</a></li>
                      <li><a href="#">Illustration</a></li>
                      <li><a href="#">Ui Kit</a></li>
              </ul>
              <ul>
                  <h3>Company</h3>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Terms</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Careers</a></li>
              </ul>
              <ul>
                  <h3>More</h3>
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Licence</a></li>
                      <li><a href="#">Changelog</a></li>
              </ul>
          </Foot_side_right>
      </Foot>
      
        </>
    )
}

export default Footer;
