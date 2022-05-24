import styled from "styled-components";

export const Main = styled.div`
  width: 392px;
  height: 576px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  border: ${(props) => {
    switch (props.userChoice) {
    case "JustLearned":
      return "3px solid var(--black-color)";
    case "DontRemember":
      return "3px solid var(--red-color)";
    case "BarelyRemember":
      return "3px solid var(--green-color)";
    case "Zap":
      return "3px solid var(--yellow-color)";
    default:
      return "#FFF";
    }
  }};
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 10px;
  font-size: 1.2rem;
`;

export const Content = styled.div`
  height: calc(100% - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.625rem;
  position: relative;
  button {
    outline: none;
    width: 65px;
    height: 50px;
    border-radius: 12px;
    background-color: #fff;
    cursor: pointer;
  }
  svg {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 10px;
    cursor: pointer;
  }
`;

export const JustLearned = styled.button`
  border: 3px solid var(--black-color);
`;

export const DontRemember = styled.button`
  border: 3px solid var(--red-color);
`;

export const BarelyRemember = styled.button`
  border: 3px solid var(--green-color);
`;

export const Zap = styled.button`
  font-weight: 700;
  border: 3px solid var(--yellow-color);
`;
