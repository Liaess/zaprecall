import Logo from "../../assets/Images/logo-game.png";
import Deck from "../../assets/Decks/reactDeck";
import Card from "../Card";
import { useState } from "react";
import { LogoHolder, Container } from "./gameWrapper";
import WinMessage from "../Messages/WinMessage";
import LoseMessage from "../Messages/LoseMessage";

export default function Game() {
  const [currentPage, setCurrentPage] = useState(0);
  const [anyMistake, setAnyMistake] = useState(false);
  const cardsPages = Deck.map((card) => (
    <Card
      Deck={Deck}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      setAnyMistake={setAnyMistake}
      {...card}
    />
  ));
  cardsPages.sort(() => Math.random() - 0.5);

  return (
    <>
      <LogoHolder>
        <img src={Logo} alt="logo" />
      </LogoHolder>

      {cardsPages.length === currentPage ? (
        anyMistake ? (
          <LoseMessage />
        ) : (
          <WinMessage />
        )
      ) : (
        <Container>{cardsPages[currentPage]}</Container>
      )}
    </>
  );
}
