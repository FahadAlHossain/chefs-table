
import PropTypes from 'prop-types';
import Cooking from '../cooking/Cooking';

const Cookings = ({cooking}) => {
    return (
        <div>
             <h1 className="text-2xl text-black font-bold text-center py-4 border-b-2 w-3/4 mx-auto">
                    Currently Cooking: {cooking.length}
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
                        {cooking.map((cook, idx) => (
                          <Cooking key={cook.recipe_id} count={idx + 1} cook={cook} />
                        ))}
                      </tbody>
                    </table>
                  </div>
        </div>
    );
};

Cookings.propTypes = {
  cooking: PropTypes.array.isRequired
}

export default Cookings;