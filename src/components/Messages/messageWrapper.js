import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  text-align: center;
  p {
    font-weight: 700;
    font-size: 2.25rem;
  }
  span {
    font-size: 1.375rem;
  }
  button {
    display: flex;
    align-items: center;
    outline: none;
    border: 3px solid var(--yellow-color);
    padding: 25px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    img {
      padding-left: 10px;
    }
  }
`;
