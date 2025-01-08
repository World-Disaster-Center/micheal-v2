import { useDispatch, useSelector } from "react-redux";
import { setSelectSearchType } from "../../redux/slice/prediction/";
import CustomDrawer from "./CustomDrawer";
import { fetchPredictionApiData } from "../../redux/services/prediction";


const PredictionDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { selectedLocation, selectSearchType, data, error } = useSelector((state) => state.prediction);

  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    dispatch(setSelectSearchType(selectedType));

    if (selectedLocation && selectedType) {
      dispatch(fetchPredictionApiData({ location: selectedLocation, type: selectedType }));
    }
  };

  return (
    <CustomDrawer isOpen={isOpen} onClose={onClose} title="Prediction Alerts" width="w-2/6">
      <div className="p-4 bg-gray-50 rounded-md shadow-md">
        <p className="text-red-700 font-semibold mb-2">
            Selected Location:{" "}
            <span className="text-gray-800">
            {selectedLocation ? JSON.stringify(selectedLocation) : "None"}
            </span>
        </p>
        <div className="relative">
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
        </div>
    </div>

    <div className="p-6 bg-gray-50 rounded-lg shadow-lg mt-4">
  {data ? (
    <div>
        <h2 className="text-lg font-bold text-red-700 mb-4">
            Data Found for Location: <span className="text-gray-800">{data.location}</span>
        </h2>
        {data.alerts && data.alerts.length > 0 ? (
            <div className="space-y-4">
            {data.alerts.map((alert, index) => (
                <div
                key={index}
                className="p-4 border border-red-700 bg-red-50 rounded-md shadow-sm"
                >
                <h3 className="text-red-700 font-semibold">
                    Alert: {alert.eventType}
                </h3>
                <p className="text-gray-700">
                    <span className="font-bold">Severity:</span> {alert.severity}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Timing:</span> {alert.timing.from} -{" "}
                    {alert.timing.to}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Areas Affected:</span>{" "}
                    {alert.areas.join(", ")}
                </p>
                <p className="text-gray-700 mt-2">
                    <span className="font-bold">Description:</span> {alert.description}
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                    <span className="font-bold">Last Updated:</span>{" "}
                    {alert.metadata.lastUpdated} | <span className="font-bold">Sender:</span>{" "}
                    {alert.metadata.sender}
                </p>
                </div>
            ))}
            </div>
        ) : (
            <p className="text-gray-500 italic">
            No alerts found for the specified location.
            </p>
        )}
        <div className="mt-4">
            <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 underline hover:text-red-500"
            >
            View More Details
            </a>
        </div>
        </div>
    ) : (
        <div>
        {error ? (
            <div className="text-red-500 font-semibold">
            Error: {error}
            </div>
        ) : (
            <p className="text-gray-500 italic">No data available.</p>
        )}
        </div>
    )}
    </div>

    </CustomDrawer>
  );
};

export default PredictionDrawer;