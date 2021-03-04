import styled from 'styled-components';

export const Foot = styled.div`
background: #E7E9EF;
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: repeat(2,1fr);
`;

export const Foot_side_left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    h2{
        font-size: 30px;
        font-family:'Audiowide',cursive;
        color:#270029;
    }
`;        
export const Social_Icons = styled.div`
margin-top:30px;
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

export const Social_Link = styled.a`
background: #270029;
padding:10px 10px 7px 10px;
border-radius:10px;

&:hover{
    background:#5B5F97;
    cursor:pointer;
    transition: 0.2s ease-out;
    }
`;

export const Foot_side_right = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
ul> h3{
    font-size: 24px;
    color: #270029;
    margin-top: 25px;
    margin-bottom: 25px;
}
ul >li{
    list-style: none;
    margin-bottom: 15px;
     
    a{
        text-decoration: none;
        color: #270029;

        &:hover{
            text-decoration:underline;
        }
    }
}
`;