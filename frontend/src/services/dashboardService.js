import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const getDashboardData = async () => {

  const response = await axios.get(
    `${API_BASE_URL}/emissions/dashboard/`
  );

  return response.data;
};

export const getSuspiciousRecords = async () => {

  const response = await axios.get(
    `${API_BASE_URL}/emissions/suspicious-records/`
  );

  return response.data;
};