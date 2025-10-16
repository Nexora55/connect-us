# Connect-US Backend

NestJS backend service with Google Sheets API integration.

## Features

- RESTful API endpoints
- Google Sheets integration
- CORS enabled for frontend
- TypeScript support
- Environment configuration

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

   Update the following variables:
   - `GOOGLE_APPLICATION_CREDENTIALS`: Path to your Google service account key
   - `GOOGLE_SHEET_ID`: Your Google Sheet ID
   - `PORT`: Server port (default: 5000)

3. Start the server:
   ```bash
   npm run start:dev
   ```

## API Documentation

### Health Check
- **GET** `/`
  - Returns: Welcome message

- **GET** `/health`
  - Returns: Health status with timestamp

### Google Sheets Operations

- **GET** `/sheets/:spreadsheetId?range=<range>`
  - Get data from a Google Sheet
  - Parameters:
    - `spreadsheetId`: The ID of the Google Sheet
    - `range`: Cell range (e.g., "Sheet1!A1:D10")

- **POST** `/sheets/:spreadsheetId/update`
  - Update data in a Google Sheet
  - Body:
    ```json
    {
      "range": "Sheet1!A1:D10",
      "values": [["row1col1", "row1col2"], ["row2col1", "row2col2"]]
    }
    ```

- **POST** `/sheets/:spreadsheetId/append`
  - Append data to a Google Sheet
  - Body:
    ```json
    {
      "range": "Sheet1!A1:D10",
      "values": [["row1col1", "row1col2"], ["row2col1", "row2col2"]]
    }
    ```

## Project Structure

```
src/
├── sheets/              # Google Sheets module
│   ├── sheets.controller.ts
│   ├── sheets.service.ts
│   └── sheets.module.ts
├── app.module.ts        # Root module
├── app.controller.ts    # App controller
├── app.service.ts       # App service
└── main.ts             # Application entry point
```

## Scripts

- `npm run start` - Start the server
- `npm run start:dev` - Start with hot reload
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
