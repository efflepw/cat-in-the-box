import "./App.css";
import IntroText from "./components/IntroText";
import MovesList from "./components/MovesList";

import ThreeCanvas from "./components/ThreeCanvas";
import MovesContextProvider from "./context/moves.provider";

const App = () => {
  return (
    <MovesContextProvider>
      <main className="h-screen relative font-montserrat">
        <IntroText />
        <ThreeCanvas />
        <MovesList />
      </main>
    </MovesContextProvider>
  );
};

export default App;
