import "./App.css";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Router } from "./frontend/routes/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer
          theme="colored"
          autoClose={1000}
          position="bottom-left"
        />
        <Navbar />
        <Router />
      </header>
    </div>
  );
}

export default App;
