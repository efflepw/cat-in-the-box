import "./App.css";

import ThreeCanvas from "./components/ThreeCanvas";
import { MovesContextProvider } from "./context/moves";

const App = () => {
  return (
    <MovesContextProvider>
      <main className="h-screen">
        <ThreeCanvas />
      </main>
    </MovesContextProvider>
  );
};

export default App;
