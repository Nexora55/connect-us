# Connect-US Frontend

React frontend application with TypeScript, Zustand, and Tailwind CSS.

## Features

- Modern React with TypeScript
- State management with Zustand
- Responsive UI with Tailwind CSS
- Fast development with Vite
- API integration with Axios

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx
│   ├── DataTable.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── pages/              # Page components
│   └── Home.tsx
├── store/              # Zustand stores
│   ├── useAppStore.ts
│   └── useDataStore.ts
├── services/           # API services
│   └── api.ts
├── App.tsx             # Root component
├── main.tsx            # Application entry
└── index.css           # Global styles
```

## State Management

### useAppStore
Global application state:
- `isLoading`: Loading state
- `error`: Error messages
- `setLoading(loading)`: Update loading state
- `setError(error)`: Update error state

### useDataStore
Data management state:
- `data`: Array of data items
- `selectedItem`: Currently selected item
- `setData(data)`: Set all data
- `addItem(item)`: Add new item
- `updateItem(id, updates)`: Update item
- `deleteItem(id)`: Delete item
- `setSelectedItem(item)`: Set selected item

## Components

### Header
Application header with branding

### DataTable
Displays data in a table format with actions

### LoadingSpinner
Loading indicator component

### ErrorMessage
Error display component

## API Service

The `api.ts` file provides methods for interacting with the backend:

```typescript
import { sheetsApi } from './services/api';

// Get sheet data
const data = await sheetsApi.getSheetData(spreadsheetId, 'Sheet1!A1:D10');

// Update sheet data
await sheetsApi.updateSheetData(spreadsheetId, 'Sheet1!A1:D10', values);

// Append sheet data
await sheetsApi.appendSheetData(spreadsheetId, 'Sheet1!A1:D10', values);
```

## Styling

This project uses Tailwind CSS. Customize the theme in `tailwind.config.js`.

Common utility patterns used:
- Responsive design: `md:`, `lg:`, `xl:` prefixes
- Spacing: `p-*`, `m-*`, `px-*`, `py-*`
- Colors: `bg-*`, `text-*`, `border-*`
- Flexbox: `flex`, `items-*`, `justify-*`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Development

1. Make changes to components in `src/`
2. Hot reload will update the browser automatically
3. Use TypeScript for type safety
4. Follow React best practices and hooks patterns
