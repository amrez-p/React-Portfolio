import styled from 'styled-components';

export const Slides = styled.div`
position:relative;
width:100%;
display:flex;
align-items:center;
overflow:hidden;
`;

export const Slide = styled.div`
min-width:100%;
height:80vh;
transition:0.5s ease;
overflow:hidden;


`;
export const Btn =styled.div`
position: absolute;
top: 75%;
right: 10%;
font-size: 2.5rem;
color: #000;
z-index: 10;
cursor: pointer;
user-select: none;
.ArrowLeft{
position: absolute;
top: 0;
right: 110%;
}

`;

