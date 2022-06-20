import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";
import HashtagPage from "./pages/HashtagPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

import UserContext from "./contexts/UserContext.js";
import TokenContext from "./contexts/TokenContext.js";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/timeline" element={<HomePage />} />
            <Route path="/hashtag/:word" element={<HashtagPage />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
          <GlobalStyle />
        </Router>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
};

export default App;
