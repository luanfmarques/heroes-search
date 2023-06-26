import styled from "styled-components";

export const HeroListContainer = styled.ul`
  display: grid;
  width: 100%;
  gap: 20px;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  a:hover li p {
    color: lightgrey;
  }
`;

export const HeroCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;
