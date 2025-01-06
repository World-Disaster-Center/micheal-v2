import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPredictionApiData } from "../../redux/services/prediction";

const ApiComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.api);

  useEffect(() => {
    const fetchData = async () => {
      // Define the parameters for the API request
      const params = {
        lat: 47.745, // Example latitude
        long: -13.942, // Example longitude
        searchType: "fwi", // Example search type
      };

      // Dispatch the action
      dispatch(fetchPredictionApiData(params));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">API Data Fetch</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <pre className="bg-gray-100 p-4 rounded shadow text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ApiComponent;
