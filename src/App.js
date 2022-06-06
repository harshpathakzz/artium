import "./App.css";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Router } from "./frontend/routes/Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router />
      </header>
    </div>
  );
}

export default App;
