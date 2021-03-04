import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Nav = styled.nav`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 20px 0 0 130px;
background-color:#270029;
h1{
    font-size: 34px;
    font-family: 'Audiowide', cursive;

}
ul{
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
margin-left: 80px;

}
`;
export const NavLinks = styled(Link)`
     padding: 10px 20px 12px 20px;
     text-decoration: none;
     cursor:pointer;
 
     &:hover{
         background-color:#E7E9EF;
         color:#270029;
         transition: 0.5s ease;
     }
`;