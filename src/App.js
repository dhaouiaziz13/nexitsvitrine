import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import WhoIsItFor from "./components/WhoIsItFor";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/whoisitfor" exact element={<WhoIsItFor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
