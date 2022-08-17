import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
