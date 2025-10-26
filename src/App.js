// src/App.js
import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ pour le style

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gestion des Comptes</h2>
      <CompteForm />
      <hr />
      <CompteList />
    </div>
  );
}

export default App;
