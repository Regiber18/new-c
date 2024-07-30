import styled from "styled-components"

const ButtonStyled = styled.button`
      width: 70%;
      height: 45px;
      background-color: white;
      border-radius: 0px;
      color: black; 
      font-size: 15px;
      display: flex; 
      justify-content: center;
      align-items: center;  
      box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

      &:hover {
       background-color: #2ecc71; 
 };`  

function Button({title, onClick}) {
    
    return(<ButtonStyled  onClick={onClick} >{title}</ButtonStyled>)
}
 
export default Button;