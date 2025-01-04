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
  const [cooking, setCooking] = useState([]); 

  const handleAddToCook = (recipe) => {
  
    if (cooking.some((cook) => cook.recipe_id === recipe.recipe_id)) {
      setCooks((prevCooks) => [...prevCooks, recipe]);
      setCooking((prevCooking) =>
        prevCooking.filter((cook) => cook.recipe_id !== recipe.recipe_id)
      );
      return;
    }

    const isDuplicate = cooks.some((cook) => cook.recipe_id === recipe.recipe_id);
    if (isDuplicate) {
      toast.error("This recipe is already added!");
      return;
    }

    setCooks((prevCooks) => [...prevCooks, recipe]);
  };

  const moveToCooking = (recipe, id) => {
    if (!cooking.some((cook) => cook.recipe_id === id)) {
      setCooking((prevCooking) => [...prevCooking, recipe]);
      setCooks((prevCooks) => prevCooks.filter((cook) => cook.recipe_id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <OurRecipe />
      <div className="md:flex max-w-7xl mx-auto">
        <Recipes handleAddToCook={handleAddToCook} />
        <Cooks cooks={cooks} moveToCooking={moveToCooking} cooking={cooking} />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
