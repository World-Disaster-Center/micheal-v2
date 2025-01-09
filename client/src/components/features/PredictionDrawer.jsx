import { useDispatch, useSelector } from "react-redux";
import { setSelectSearchType } from "../../redux/slice/prediction/";
import CustomDrawer from "./CustomDrawer";

// Mock data for different search types
const MOCK_DATA = {
  capAlerts: {
    location: "Sample Location",
    alerts: [
      {
        eventType: "Severe Thunderstorm",
        severity: "Moderate",
        timing: {
          from: "2025-01-09T10:00:00",
          to: "2025-01-09T18:00:00"
        },
        areas: ["District A", "District B"],
        description: "Possibility of strong winds and heavy rainfall.",
        metadata: {
          lastUpdated: "2025-01-09T08:00:00",
          sender: "National Weather Service"
        }
      }
    ],
    url: "https://example.com/weather-alerts"
  },
  drought40: {
    location: "Sample Location",
    alerts: [
      {
        eventType: "Drought Warning",
        severity: "High",
        timing: {
          from: "2025-01-01",
          to: "2025-01-40"
        },
        areas: ["Region X", "Region Y"],
        description: "40-day drought prediction indicates severe water scarcity.",
        metadata: {
          lastUpdated: "2025-01-09T00:00:00",
          sender: "Drought Monitoring Center"
        }
      }
    ],
    url: "https://example.com/drought-40"
  },
  drought100: {
    location: "Sample Location",
    alerts: [
      {
        eventType: "Extended Drought Alert",
        severity: "Critical",
        timing: {
          from: "2025-01-01",
          to: "2025-04-10"
        },
        areas: ["Zone 1", "Zone 2", "Zone 3"],
        description: "100-day forecast shows prolonged drought conditions expected.",
        metadata: {
          lastUpdated: "2025-01-09T00:00:00",
          sender: "Climate Prediction Center"
        }
      }
    ],
    url: "https://example.com/drought-100"
  },
  fwi: {
    location: "Sample Location",
    alerts: [
      {
        eventType: "Fire Weather Warning",
        severity: "Extreme",
        timing: {
          from: "2025-01-09",
          to: "2025-01-12"
        },
        areas: ["Forest Area A", "Forest Area B"],
        description: "High fire spread potential due to strong winds and low humidity.",
        metadata: {
          lastUpdated: "2025-01-09T06:00:00",
          sender: "Fire Weather Intelligence Unit"
        }
      }
    ],
    url: "https://example.com/fire-spread"
  },
  dfm10h: {
    location: "Sample Location",
    alerts: [
      {
        eventType: "Fuel Moisture Alert",
        severity: "Moderate",
        timing: {
          from: "2025-01-09",
          to: "2025-01-10"
        },
        areas: ["Sector 1", "Sector 2"],
        description: "10-hour fuel moisture content below critical threshold.",
        metadata: {
          lastUpdated: "2025-01-09T07:00:00",
          sender: "Fuel Moisture Monitoring System"
        }
      }
    ],
    url: "https://example.com/fuel-moisture"
  }
};

const PredictionDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { selectedLocation, selectSearchType } = useSelector((state) => state.prediction);

  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    dispatch(setSelectSearchType(selectedType));
  };

  // Get mock data based on selected search type
  const mockData = selectSearchType ? MOCK_DATA[selectSearchType] : null;

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
        {mockData ? (
          <div>
            <h2 className="text-lg font-bold text-red-700 mb-4">
              Data Found for Location: <span className="text-gray-800">{mockData.location}</span>
            </h2>
            {mockData.alerts && mockData.alerts.length > 0 ? (
              <div className="space-y-4">
                {mockData.alerts.map((alert, index) => (
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
                href={mockData.url}
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
            <p className="text-gray-500 italic">Please select a search type to view data.</p>
          </div>
        )}
      </div>
    </CustomDrawer>
  );
};

export default PredictionDrawer;