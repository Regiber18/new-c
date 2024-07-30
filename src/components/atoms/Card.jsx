import styled from "styled-components";

const DivStyled = styled.div`
      width: 100%;
      height: auto;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
      padding: 5px; 
      display: flex;
      flex-direction: column;
`;

function Card(props) {
    return(
        <DivStyled key={props.key}>
            {props.children}
        </DivStyled>   
    )
}

export default  Card;