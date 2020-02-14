import styled from "styled-components";


export const InnerContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;


export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
      align-items: center;
      margin-left: 10%;
      margin-bottom:15%
`;

export const Input = styled.input`
margin-bottom: 10px;
`;
export const Form = styled.form`
display: flex;
width: 40%;

flex-direction: column;
align-items: center;
`;
//add
export const AddForm = styled.form`
display: flex;
width: 40%;
margin-top: 5%;
flex-direction: column;
align-items: center;
line-height: 40px;

      justify-content: center;
`;


export const TextArea = styled.textarea`
margin-bottom: 10px;
padding: 5px 10px;
border: none;
border-bottom: solid black 1px;
border-right: solid black;
border-left: solid black 1px;
`;

export const AddInput = styled.input`
margin-bottom: 10px;
padding: 5px 10px;
border: none;
border-bottom: solid black 1px;
`;
export const AddSelect = styled.select`
margin-bottom: 10px;
padding: 5px 10px;
border: none;
border-bottom: solid black 1px;
`;





///global component
 export const Button = styled.button`
background: #e2b045;
outline: none;
border: none;
padding: 5px 10px;

`;

export const ImgContainer = styled.div`
width: 40%;
`;

export const Img = styled.img`
width: 80%;
border-radius: 50%;

`;
export const Title = styled.h1`
font-family: "Righteous", cursive;
color: #d86e20;
font-size: 2rem;
`;