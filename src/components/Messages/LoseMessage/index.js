import { Main } from "../messageWrapper";
import { useNavigate } from "react-router-dom";
import DoubleArrow from "../../../assets/Images/double-arrow.png";

export default function LoseMessage() {
  const navigate = useNavigate();

  return (
    <Main>
      <p>Putz.. 😥</p>
      <span>
        Você esqueceu alguns flashcards..<br></br>Não desanime! Na próxima você
        consegue!
      </span>
      <button onClick={() => navigate("/")}>
        Tentar novamente<img src={DoubleArrow} alt="arrows"></img>
      </button>
    </Main>
  );
}
