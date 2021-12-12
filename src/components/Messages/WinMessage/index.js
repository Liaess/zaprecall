import { useNavigate } from "react-router-dom";
import { Main } from "../messageWrapper";
import DoubleArrow from "../../../assets/Images/double-arrow.png";

export default function WinMessage() {
  const navigate = useNavigate();
  return (
    <Main>
      <p>PARABÉNS! 🥳</p>
      <span>Você não esqueceu de nenhum flashcard!</span>
      <button onClick={() => navigate("/")}>
        Tentar novamente<img src={DoubleArrow} alt="arrows"></img>
      </button>
    </Main>
  );
}
