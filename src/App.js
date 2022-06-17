import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";
import HashtagPage from "./pages/HashtagPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/timeline" element={<HomePage />} />
        <Route path="/hashtag/:word" element={<HashtagPage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
