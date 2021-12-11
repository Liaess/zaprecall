import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  p {
    padding-top: 15px;
  }
  button {
    display: flex;
    align-items: center;
    margin-top: 10%;
    outline: none;
    border: 3px solid var(--yellow-color);
    padding: 25px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 12px;
    font-size: 20px;
    img {
      padding-left: 10px;
    }
  }
`;
