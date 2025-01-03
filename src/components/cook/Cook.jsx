import { PropTypes } from "prop-types";

const Cook = ({ cook, count }) => {
  const { recipe_name, preparing_time, calories } = cook;

  return (
    <tr className="bg-gray-100 border-none text-gray-600">
      <th>{count}</th>
      <td className="pr-5">{recipe_name}</td>
      <td className="pr-5">{preparing_time}</td>
      <td>{calories}</td>
      <td>
        <button className="bg-green-500 text-black font-medium px-2 py-2 rounded-full hover:bg-red-100">
          Preparing
        </button>
      </td>
    </tr>
  );
};

Cook.proptypes = {
  cook: PropTypes.object,
  count: PropTypes.number,
};

export default Cook;
