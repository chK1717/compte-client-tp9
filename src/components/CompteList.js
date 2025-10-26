// src/components/CompteList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteList() {
  // État pour stocker les comptes
  const [comptes, setComptes] = useState([]);

  // useEffect pour récupérer les données dès le chargement
  useEffect(() => {
    axios.get(`${API_BASE_URL}/comptes`)
      .then(response => setComptes(response.data))
      .catch(error => console.error("Erreur lors du chargement des comptes :", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Liste des Comptes</h2>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Solde</th>
            <th>Date de Création</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {comptes.map(compte => (
            <tr key={compte.id}>
              <td>{compte.id}</td>
              <td>{compte.solde}</td>
              <td>{compte.dateCreation}</td>
              <td>{compte.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompteList;
