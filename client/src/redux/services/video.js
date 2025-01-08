import client from "./client";

const suffix = "/api/v1/video";

// POST -> Create video
export const createVideo = async (body) => {
    try{
        const {data} = await client.post(`${suffix}/`, body);
        return data;
    }catch (error) {
        // TODO: Remove console.log in production - todo later
        console.log(error);
        const { response } = error;
        if (response?.data) {
          return response.data;
        }
        return { error: error.message || error };
    }
}

// Get -> GET videos
export const getVideos = async (body) => {
    try{
        const {data} = await client.get(`${suffix}/public/all`, body);
        return data.data;
    }catch (error) {
        // TODO: Remove console.log in production - todo later
        console.log(error);
        const { response } = error;
        if (response?.data) {
          return response.data;
        }
        return { error: error.message || error };
    }
}

// Get -> GET videos
export const getVideo = async (id) => {
    try{
        const {data} = await client.get(`${suffix}/all/${id}`);
        return data;
    }catch (error) {
        // TODO: Remove console.log in production - todo later
        console.log(error);
        const { response } = error;
        if (response?.data) {
          return response.data;
        }
        return { error: error.message || error };
    }
}