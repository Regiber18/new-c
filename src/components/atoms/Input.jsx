import styled from "styled-components";

const softGreen = '#a8d5ba'; 

const InputStyled = styled.input `
    width: 90%; 
    height: 40px;
    border: 1px solid #808080;
    border-radius: 5px; 
    padding: 0 10px; 
    box-sizing: border-box; 
    outline: none; 
 
    &:focus {
        border-color: black; 
        box-shadow: 0 0 4px ${softGreen};
    }
`;

function Input(props) {
    const change = (event) => {
        props.fnVal(event.target.value);
    };

    return (
        <InputStyled
            pattern={props.pattern}
            value={props.val}
            onChange={change}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
}

export default Input;
