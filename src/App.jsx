import "./App.css";

import Background from "./Components/Background";
import RulesContext from "./contexts/RulesContext";

function App() {
  return (
    <div className="App">
      <RulesContext>
        <Background />
      </RulesContext>
    </div>
  );
}

export default App;
