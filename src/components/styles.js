import styled from "styled-components";


const Card = styled.div`
    display: flex;
    margin:0;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    padding: 10px;
    flex-direction: column;
    align-items:center;
    align-content:center;
    justify-content: space-around;
    height: 500px;
    width: 500px;
    position: absolute;
    top: 50%;
`

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width: 400px;
    padding: 0 80px;

`

export {
    Card,
    ButtonContainer
}