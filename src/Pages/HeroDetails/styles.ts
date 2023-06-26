import styled from "styled-components";

export const HeroDatailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      position: absolute;
      left: 10px;
      top: 0px;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      svg {
        fill: lightgray;
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  p {
    font-style: italic;
    line-height: 1.2rem;
    max-width: 450px;
  }
`;
