import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cooks from "./components/cooks/Cooks";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import OurRecipe from "./components/our-recipe/OurRecipe";
import Recipes from "./components/recipes/Recipes";

function App() {
  const [cooks, setCooks] = useState([]);

  const handleAddToCook = recipe =>{
    const isDuplicate = cooks.some(cook => cook.recipe_id === recipe.recipe_id);
    if(isDuplicate){
      toast.error("This recipe is already added!");
      return;
    }
    const newRecipe = [...cooks, recipe];
    setCooks(newRecipe);
  }

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <OurRecipe></OurRecipe>
      <div className="md:flex max-w-7xl mx-auto">
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <Cooks cooks={cooks}></Cooks>
      </div>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
      />
    </>
  );
}

export default App;
