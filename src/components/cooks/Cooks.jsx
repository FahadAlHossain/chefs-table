import PropTypes from "prop-types";
import Cook from "../cook/Cook";

const Cooks = ({ cooks }) => {
  return (
    <div className="md:w-1/3 md:mt-14 my-5 border-2 border-gray-300 md:mx-2 mx-3 rounded-xl h-1/4 overflow-hidden">
      <h1 className="text-2xl text-black font-bold text-center py-4 border-b-2 w-3/4 mx-auto">
        Want to cook: {cooks.length}
      </h1>
      <div className="overflow-x-auto">
        {/* Scrollable table on smaller screens */}
        <table className="table-auto w-full border-collapse my-5">
          <thead>
            <tr className="border-none text-lg text-gray-400">
              <th className="p-2 text-left"></th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cooks.map((cook, idx) => (
              <Cook key={cook.recipe_id} count={idx + 1} cook={cook} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooks.propTypes = {
  cooks: PropTypes.array.isRequired,
};

export default Cooks;
