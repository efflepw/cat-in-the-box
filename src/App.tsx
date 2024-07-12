import "./App.css";

import ThreeCanvas from "./components/ThreeCanvas";
import { INTRO_TEXT } from "./const/text";
import MovesContextProvider from "./context/moves.provider";

const App = () => {
  return (
    <MovesContextProvider>
      <main className="h-screen relative font-montserrat">
        <div className="absolute top-12 left-1/3 transform -translate-x-1/4 text-4xl">
          {INTRO_TEXT}
        </div>
        <ThreeCanvas />
      </main>
    </MovesContextProvider>
  );
};

export default App;
