import styled from 'styled-components';
import imgBg from '../../images/image_one.jpg';


export const Main = styled.div`
    background:url(${imgBg});
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
    background-position:center;
background-repeat:no-repeat;
background-size:cover;
    height:500px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
`;
export const Side_right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 65%;
    padding-left: 8rem;
    p{
        margin-top:15px;
    }
   h2{
   font-size: 50px;
   line-height: 50px;
   margin:15px 0 10px 0;
   } 


`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:20px 0 20px 0;
h2{
    font-size: 40px;
    margin-bottom: 20px;
    color: #270029;
}
p{
    text-align: center;
    color: #270029;
    margin-bottom: 20px;
}
`;


export const Section_Three = styled.div`
background: #270029;
margin: auto;
display: grid;
grid-template-columns: repeat(2,1fr);
justify-content: center;
align-items: center;
max-width: 100%;
width: 1400px;
border-radius: 10px;

`;

export const Section_three_right = styled.div`
display: flex;
justify-content: flex-end;
h2{
    margin-right:15px;
    font-size: 45px;
}
`;

export const Section_three_left = styled.div`
display: flex;
justify-content: flex-start;
align-items:center;
margin-bottom: 50px;
padding-left: 10rem;

.section_input{ 
    padding:5px 10px;
    font-family:'Cabin',cursive;
    font-size:20px;
    margin-bottom:10px;
    border:none;
    outline: none;
    border-radius:3px;
    &::placeholder{
        color:#E7E9EF;
    }
}
.section_three_btn{
  margin-left:1rem;
}
}
`;
