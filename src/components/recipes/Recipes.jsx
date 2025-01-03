import { useEffect, useState } from "react";
import Recipe from "../recipe/Recipe";
import {PropTypes} from "prop-types";

const Recipes = ({handleAddToCook}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3 mt-14">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {recipes.map((recipe,idx) => (
          <Recipe key={idx} handleAddToCook={handleAddToCook} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleAddToCook: PropTypes.func.isRequired
}

export default Recipes;
