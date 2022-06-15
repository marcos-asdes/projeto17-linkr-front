import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/timeline" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
