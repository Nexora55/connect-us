import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Google Sheets API calls
export const sheetsApi = {
  getSheetData: async (spreadsheetId: string, range: string) => {
    const response = await api.get(`/sheets/${spreadsheetId}`, {
      params: { range },
    });
    return response.data;
  },

  updateSheetData: async (
    spreadsheetId: string,
    range: string,
    values: any[][]
  ) => {
    const response = await api.post(`/sheets/${spreadsheetId}/update`, {
      range,
      values,
    });
    return response.data;
  },

  appendSheetData: async (
    spreadsheetId: string,
    range: string,
    values: any[][]
  ) => {
    const response = await api.post(`/sheets/${spreadsheetId}/append`, {
      range,
      values,
    });
    return response.data;
  },
};
