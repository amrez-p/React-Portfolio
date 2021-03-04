import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family:'Cabin', sans-serif ;
  color:#E7E9EF;
}`;


export const Button = styled.button`
       font-family: 'Cabin',sans-serif;
       font-weight: 700;
       margin-top: 20px;
       outline:none;
       cursor:pointer;
      margin-bottom: 30px;
           border: none;
       padding: 10px 25px;
       border-radius: 5px;
       color:#E7E9EF;
       background-color: #5B5F97;
       &:hover{
       background:#270029;
       transition:0.3s ease;  
      }
       
       `;
       
export default GlobalStyle;