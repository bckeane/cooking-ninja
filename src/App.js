import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//steles
import "./App.css";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const {mode} = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Router>
        <NavBar />
        <ThemeSelector />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
