import { ArrowUndo } from "react-ionicons";
import { useState } from "react";
import Buttons from "./Buttons";
import { Main, Title, Content, ButtonHolder } from "./cardWrapper";

export default function Card({
  currentPage,
  Deck,
  setCurrentPage,
  title,
  answer,
  setAnyMistake,
}) {
  const [turnCard, setTurnCard] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [userAlreadyChoiced, setUserAlreadyChoiced] = useState(false);

  function selectedChoice(userChoice) {
    if (userChoice === "DontRemember") setAnyMistake(true);
    setUserChoice(userChoice);
    setUserAlreadyChoiced(true);
  }

  function callNextCard() {
    setTurnCard(false);
    setUserAlreadyChoiced(false);
    setUserChoice("");
    setCurrentPage(currentPage + 1);
  }

  function changeCard() {
    setTurnCard(true);
  }

  return (
    <Main userChoice={userChoice}>
      <Title>
        {currentPage + 1}/{Deck.length}
      </Title>
      <Content>{turnCard ? <p>{answer}</p> : <p>{title}</p>}</Content>
      <ButtonHolder>
        {turnCard ? (
          userAlreadyChoiced ? (
            <>
              <ArrowUndo
                cssClasses="arrowUndo"
                color={"#000"}
                height="50px"
                width="50px"
                onClick={callNextCard}
              />
            </>
          ) : (
            <Buttons selectedChoice={selectedChoice} />
          )
        ) : (
          <>
            <ArrowUndo
              cssClasses="arrowUndo"
              color={"#000"}
              height="50px"
              width="50px"
              onClick={changeCard}
            />
          </>
        )}
      </ButtonHolder>
    </Main>
  );
}
