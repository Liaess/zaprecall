import { Routes as Switch, Route } from "react-router-dom";
import GameStart from "./components/GameStart";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact element={<GameStart />} />
    </Switch>
  );
}
