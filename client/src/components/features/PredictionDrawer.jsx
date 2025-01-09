import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectSearchType } from "../../redux/slice/prediction/";
import CustomDrawer from "./CustomDrawer";
import { fetchPredictionApiData } from "../../redux/services/prediction";

const PredictionDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { selectedLocation, selectSearchType, data, error } = useSelector((state) => state.prediction);

  const [isSearchTypeSelected, setIsSearchTypeSelected] = useState(false);

  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    dispatch(setSelectSearchType(selectedType));
    setIsSearchTypeSelected(true);
  };

  const handleFetchData = () => {
    if (selectedLocation && selectSearchType) {
      dispatch(fetchPredictionApiData({ location: selectedLocation, type: selectSearchType }));
    }
  };

  return (
    <CustomDrawer isOpen={isOpen} onClose={onClose} title="Prediction Alerts" width="w-1/5">
      <div className="p-4 bg-gray-50 rounded-md shadow-md">
        <p className="text-red-700 font-semibold mb-2">
          Selected Location:{" "}
          <span className="text-gray-800">
            {selectedLocation ? JSON.stringify(selectedLocation) : "None"}
          </span>
        </p>
        <div className="relative flex gap-2">
          <select
            value={selectSearchType || ""}
            onChange={handleSearchTypeChange}
            className="block w-full bg-red-50 border border-red-700 text-red-700 font-medium rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 hover:bg-red-100"
          >
            <option value="" disabled>
              Select Search Type
            </option>
            <option value="capAlerts">Weather Alerts</option>
            <option value="drought40">Drought 40</option>
            <option value="drought100">Drought 100</option>
            <option value="fwi">Fire Spread</option>
            <option value="dfm10h">Fuel Moisture</option>
          </select>
        {isSearchTypeSelected && (
          <button
            onClick={handleFetchData}
            className="w-1/3 bg-red-700 text-white font-medium rounded-md p-3 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
          >
            Search
          </button>
        )}
        </div>
      </div>

     <div className="p-6 bg-gray-50 rounded-lg shadow-lg mt-4">
  {data ? (
    <div>
      <h2 className="text-lg font-bold text-red-700 mb-4">
        Data Found for Location: <span className="text-gray-800">{data.location}</span>
      </h2>
      {selectedCategory === "Fire Danger" ? (
        <div className="p-4 border border-yellow-700 bg-yellow-50 rounded-md shadow-sm">
          <h3 className="text-yellow-700 font-semibold">Fire Danger</h3>
          <p className="text-gray-700">
            <span className="font-bold">Severity:</span> Very Low
          </p>
        </div>
      ) : selectedCategory === "Drought" ? (
        <div className="p-4 border border-blue-700 bg-blue-50 rounded-md shadow-sm">
          <h3 className="text-blue-700 font-semibold">Drought</h3>
          <p className="text-gray-700">
            <span className="font-bold">Severity:</span> No Risk
          </p>
        </div>
      ) : selectedCategory === "Weather Alert" ? (
        <div className="p-4 border border-red-700 bg-red-50 rounded-md shadow-sm">
          <h3 className="text-red-700 font-semibold">Winter Weather Advisory</h3>
          <p className="text-gray-700">
            <span className="font-bold">Severity:</span> Moderate
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Timing:</span> Thursday 09, 3:00 AM - Friday 10, 6:00 AM
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Areas Affected:</span> Fisher, Nolan, Sterling, Coke,
            Runnels, Irion, Tom Green, Concho, Crockett, Schleicher, Sutton, Haskell, Throckmorton,
            Jones, Shackelford, Taylor, Callahan, Coleman, Brown, McCulloch, San Saba, Menard,
            Kimble, Mason
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Description:</span> A wintry mix of rain, freezing rain,
            sleet, and snow is possible starting late tonight. Although it may switch over to rain
            during the day on Thursday as temperatures rise above freezing, a wintry mix may return
            Thursday night. In general, any accumulations will remain light with most areas seeing
            patchy ice on roadways and a dusting of snow.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            <span className="font-bold">Last Updated:</span> 5h 35m ago |{" "}
            <span className="font-bold">Sender:</span> NWS San Angelo TX
          </p>
        </div>
      ) : (
        <p className="text-gray-500 italic">No alerts found for the specified location.</p>
      )}
    </div>
  ) : (
    <div>
      {error ? (
        <div className="text-red-500 font-semibold">Error: {error}</div>
      ) : (
        <p className="text-gray-500 italic">No data available.</p>
      )}
    </div>
  )}
</div>
        )}
      </div>
    </CustomDrawer>
  );
};

export default PredictionDrawer;
