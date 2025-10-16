import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Connect-US</h1>
        <p className="text-blue-100 mt-1">Data Management System</p>
      </div>
    </header>
  );
};

export default Header;
