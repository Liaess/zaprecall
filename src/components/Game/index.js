import Logo from "../../assets/Images/logo-game.png";
import Deck from "../../assets/Decks/reactDeck";
import Card from "../Card";
import { useState } from "react";
import { LogoHolder, Container } from "./gameWrapper";

export default function Game() {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPages = Deck.map((card) => (
    <Card
      Deck={Deck}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      {...card}
    />
  ));

  return (
    <>
      <LogoHolder>
        <img src={Logo} alt="logo" />
      </LogoHolder>
      <Container>{cardsPages[currentPage]}</Container>
    </>
  );
}
