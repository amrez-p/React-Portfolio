import styled from 'styled-components';

export const Section_down = styled.div`
background: #270029;
width: 100%;
height:80vh;
display: grid;
grid-template-columns: repeat(1,1fr);
justify-content: center;
align-items: center;

`;

export const Section_Wrap = styled.div`
display:flex;
align-items:center;
`;
export const Section_down_right = styled.div`
    margin: auto;
    img{   
       width:500px;
       
    }
`;
export const Section_down_left = styled.div`
   padding-left:1rem; 
   text-align: left;
    width: 50%;
    .quote{
        font-size:40px;
        margin-bottom:20px;
    }
    p{
        line-height:25px;
        margin-bottom: 40px;
    }
`;