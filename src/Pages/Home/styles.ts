import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    border: 1px solid lightgray;
    background-color: gray;
    color: white;
    font-size: 15px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    width: 100vw;
    max-width: 450px;
    &::placeholder {
      color: lightgray;
    }
  }
  button {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    height: 20px;
    margin-top: -5px;
    svg {
      fill: lightgray;
    }
  }
`;
