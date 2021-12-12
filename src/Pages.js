import { Routes as Switch, Route } from "react-router-dom";
import Game from "./components/Game";
import GameStart from "./components/GameStart";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact element={<GameStart />} />
      <Route path="/game" exact element={<Game />} />
    </Switch>
  );
}
