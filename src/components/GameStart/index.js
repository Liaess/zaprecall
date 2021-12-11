import Logo from "../../assets/logo.png";
import DoubleArrow from "../../assets/double-arrow.png";
import { Container } from "./gameStartWrapper";
import { useNavigate } from "react-router-dom";

export default function GameStart() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <p>ZapRecall</p>
        <button onClick={() => navigate("/game")}>
          Praticar React<img src={DoubleArrow} alt="arrows"></img>
        </button>
      </Container>
    </>
  );
}
