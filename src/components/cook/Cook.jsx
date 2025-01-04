import PropTypes from "prop-types";

const Cook = ({ cook, count, moveToCooking }) => {
  const { recipe_name, preparing_time, calories } = cook;

  return (
    <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
      <th className="p-2">{count}</th>
      <td className="p-2">{recipe_name}</td>
      <td className="p-2">{preparing_time}</td>
      <td className="p-2">{calories}</td>
      <td className="p-2">
        <button
          onClick={() => moveToCooking(cook, cook.recipe_id)}
          className="bg-green-500 text-black font-medium px-4 py-2 rounded-full hover:bg-red-200 transition-all"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

Cook.propTypes = {
  cook: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  moveToCooking: PropTypes.func.isRequired,
};

export default Cook;
