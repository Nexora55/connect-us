import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class SheetsService {
  private sheets;

  constructor() {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async getSheetData(spreadsheetId: string, range: string) {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      return response.data.values;
    } catch (error) {
      console.error('Error reading sheet:', error);
      throw error;
    }
  }

  async updateSheetData(
    spreadsheetId: string,
    range: string,
    values: any[][],
  ) {
    try {
      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating sheet:', error);
      throw error;
    }
  }

  async appendSheetData(
    spreadsheetId: string,
    range: string,
    values: any[][],
  ) {
    try {
      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error appending to sheet:', error);
      throw error;
    }
  }
}
