import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import WhoIsItFor from "./components/WhoIsItFor";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/whoisitfor" exact element={<WhoIsItFor />} />
          <Route path="/login" exact element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
