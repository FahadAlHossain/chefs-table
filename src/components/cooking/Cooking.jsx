import PropTypes from "prop-types";

const Cooking = ({cook, count}) => {
    const {recipe_name, preparing_time, calories} = cook
  return (
    <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
      <th className="p-2">{count}</th>
      <td className="p-2">{recipe_name}</td>
      <td className="p-2">{preparing_time}</td>
      <td className="p-2">{calories}</td>
    </tr>
    
  );
};

Cooking.propTypes = {
    cook: PropTypes.object,
    count: PropTypes.number
}

export default Cooking;
