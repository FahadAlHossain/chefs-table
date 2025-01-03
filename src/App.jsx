import "./App.css";
import Cooks from "./components/cooks/Cooks";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import OurRecipe from "./components/our-recipe/OurRecipe";
import Recipes from "./components/recipes/Recipes";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <OurRecipe></OurRecipe>
      <div className="md:flex max-w-7xl mx-auto">
        <Recipes></Recipes>
        <Cooks></Cooks>
      </div>
    </>
  );
}

export default App;
