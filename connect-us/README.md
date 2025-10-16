# Connect-US

A full-stack application for managing data with Google Sheets integration.

## Tech Stack

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Google Sheets API** - Data synchronization
- **Express** - Web server

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Axios** - HTTP client

## Project Structure

```
connect-us/
├── backend/                 # NestJS backend
│   ├── src/
│   │   ├── sheets/         # Google Sheets module
│   │   │   ├── sheets.controller.ts
│   │   │   ├── sheets.service.ts
│   │   │   └── sheets.module.ts
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── nest-cli.json
│
└── frontend/               # React frontend
    ├── src/
    │   ├── components/    # Reusable components
    │   │   ├── Header.tsx
    │   │   ├── DataTable.tsx
    │   │   ├── LoadingSpinner.tsx
    │   │   └── ErrorMessage.tsx
    │   ├── pages/         # Page components
    │   │   └── Home.tsx
    │   ├── store/         # Zustand stores
    │   │   ├── useAppStore.ts
    │   │   └── useDataStore.ts
    │   ├── services/      # API services
    │   │   └── api.ts
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js
    └── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Cloud Project with Sheets API enabled
- Google Service Account credentials

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure your Google Sheets API credentials:
   - Download your service account JSON key from Google Cloud Console
   - Set `GOOGLE_APPLICATION_CREDENTIALS` to the path of your credentials file
   - Set `GOOGLE_SHEET_ID` to your Google Sheet ID

5. Start the backend server:
   ```bash
   npm run start:dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### Backend API

- `GET /` - Health check
- `GET /health` - Health status with timestamp
- `GET /sheets/:spreadsheetId?range=<range>` - Get sheet data
- `POST /sheets/:spreadsheetId/update` - Update sheet data
- `POST /sheets/:spreadsheetId/append` - Append data to sheet

## Google Sheets Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Create a service account and download the JSON key file
5. Share your Google Sheet with the service account email
6. Copy the Sheet ID from the URL

## Development

### Backend Development

- `npm run start` - Start the server
- `npm run start:dev` - Start with hot reload
- `npm run build` - Build for production
- `npm run start:prod` - Start production server

### Frontend Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## State Management

The frontend uses Zustand for state management with two main stores:

### useAppStore
- Manages global app state (loading, errors)

### useDataStore
- Manages data operations (CRUD)
- Handles selected items

## Styling

The project uses Tailwind CSS for styling. All components use utility classes for responsive design and consistent theming.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Support

For issues and questions, please open an issue on the repository.
