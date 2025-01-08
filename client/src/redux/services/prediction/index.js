import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_PREDICTION_API_URL;

export const fetchPredictionApiData = createAsyncThunk(
  "api/fetchData",
  async ({ lat, long, searchType }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await toast.promise(
        axios.get(`${apiUrl}`, {
          params: { lat, long, searchType },
        }),
        {
          pending: "Fetching data...",
          error: {
            render({ data }) {
              return `Error: ${data.message}`;
            },
          },
        }
      );

      const data = response.data;
      toast.success("Data fetched successfully!");
      return data;
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const campanyService = {
    fetchPredictionApiData
};
