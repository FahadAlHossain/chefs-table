import PropTypes from "prop-types";
import Cook from "../cook/Cook";

const Cooks = ({ cooks }) => {
  return (
    <div className="md:w-1/3 mt-14 border border-black ml-5 rounded-xl h-1/4">
      <h1 className="text-2xl text-black font-bold text-center py-4 border-b-2 w-3/4 mx-auto">
        Want to cook: {cooks.length}
      </h1>
      {/* <hr className="border mt-5"/> */}
      <table className="table my-5">
        <thead>
          <tr className="border-none text-lg text-gray-400">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {cooks.map((cook, idx) => (
            <Cook key={cook.recipe_id} count={idx + 1} cook={cook}></Cook>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Cooks.proptypes = {
  cooks: PropTypes.array,
};
export default Cooks;
