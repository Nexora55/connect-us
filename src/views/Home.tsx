import React, { useEffect } from 'react';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useAppStore } from '../store/useAppStore';

const Home: React.FC = () => {
  const { isLoading, error } = useAppStore();

  useEffect(() => {
    // Fetch initial data when component mounts
    // This is a placeholder - implement your data fetching logic here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Dashboard
          </h2>
          <p className="text-gray-600">
            Manage your data and sync with Google Sheets
          </p>
        </div>

        {error && (
          <div className="mb-6">
            <ErrorMessage message={error} />
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">Data</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition">
              Add New
            </button>
          </div>

          {isLoading ? <LoadingSpinner /> : <DataTable />}
        </div>
      </main>
    </div>
  );
};

export default Home;
