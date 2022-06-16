import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/timeline" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
