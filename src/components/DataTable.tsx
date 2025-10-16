import React from 'react';
import { useDataStore } from '../store/useDataStore';

const DataTable: React.FC = () => {
  const { data, setSelectedItem } = useDataStore();

  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No data available</p>
      </div>
    );
  }

  const headers = Object.keys(data[0] || {});

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {headers.map((header) => (
                <td key={header} className="px-6 py-4 text-sm text-gray-900">
                  {row[header]}
                </td>
              ))}
              <td className="px-6 py-4 text-right text-sm">
                <button
                  onClick={() => setSelectedItem(row)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
