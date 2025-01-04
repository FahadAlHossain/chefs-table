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
  const [time, setTime] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const handleAddToCook = (recipe) => {
    const isDuplicate = cooks.some(
      (cook) => cook.recipe_id === recipe.recipe_id
    );
    if (isDuplicate) {
      toast.error("This recipe is already added!");
      return;
    }

    setCooks((prevCooks) => [...prevCooks, recipe]);
  };

  const moveToCooking = (recipe, id, recipeTime, totalCalories) => {
    setTime(time + recipeTime);
    setCalorie(calorie + totalCalories);
    const addItem = cooking.some((cook) => cook.recipe_id === id);
    if (addItem || !addItem) {
      setCooking((prevCooking) => [...prevCooking, recipe]);
      setCooks((prevCooks) =>
        prevCooks.filter((cook) => cook.recipe_id !== id)
      );
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <OurRecipe />
      <div className="md:flex max-w-7xl mx-auto">
        <Recipes handleAddToCook={handleAddToCook} />
        <Cooks
          cooks={cooks}
          moveToCooking={moveToCooking}
          time={time}
          calorie={calorie}
          cooking={cooking}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
