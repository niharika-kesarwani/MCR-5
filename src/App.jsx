import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:recipeId" element={<RecipeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
