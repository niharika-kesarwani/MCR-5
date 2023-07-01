import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipeDetail } from "./pages/RecipeDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:recipeId" element={<RecipeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
