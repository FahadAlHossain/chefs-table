import Proptypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { TbFlame } from "react-icons/tb";

const Recipe = ({ recipe }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="border-2 border-gray-300 rounded-xl p-5 leading-8">
      <img className="w-full h-48 rounded-xl mb-5" src={recipe_image} alt="" />
      <h3 className="text-2xl text-black font-semibold mb-2">{recipe_name}</h3>
      <p className="text-gray-500 mb-3">{short_description}</p>
      <hr className="border mb-3" />
      <h4 className="text-xl text-black font-semibold mb-3">Ingredients: {ingredients.length}</h4>
      <ul className="list-disc text-gray-500 text-base pl-8 mb-4">
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
      </ul>
      <hr className="border mb-3"/>
      <div className="flex items-center text-gray-700 mb-4">
        <FaRegClock/> <span  className="pl-2 pr-4" >{preparing_time}</span>
        <TbFlame/><span  className="pl-2" >{calories}</span>
      </div>
      <button className="bg-green-500 text-black font-medium px-6 py-2 rounded-full hover:bg-red-100">
           Want to cook
          </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: Proptypes.object.isRequired,
};

export default Recipe;
