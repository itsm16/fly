import axios from "axios";

const API_URL = "https://mamun-reza-freeshops-backend.vercel.app/api/v1/user/getUserSaveList";

// Your Bearer Token (ensure it’s valid)
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTc4OGRkZmIwMWEyY2I1ZGFhZThjYSIsImlhdCI6MTcyOTU5NTY0NSwiZXhwIjoxNzYxMTMxNjQ1fQ.406ydzcSP1eJrLIx0SGoJ2D6Lem_rB35gj0MS0JuYY0";

const getUserSaveList = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`, // Sending Bearer Token in the headers
        "Content-Type": "application/json"
      }
    });

    console.log("User Save List:", response.data);
  } catch (error) {
    console.error("Error fetching user save list:", error.response ? error.response.data : error);
  }
};

getUserSaveList();
