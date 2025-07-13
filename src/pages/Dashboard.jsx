
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Gira Tempo</h2>
      <p className="mb-4">Aqui você pode oferecer ou buscar ajuda em troca de tempo.</p>
      <div className="space-x-4">
        <Link to="/catalog" className="bg-blue-500 text-white px-4 py-2 rounded">Ver Catálogo</Link>
        <Link to="/profile" className="bg-green-500 text-white px-4 py-2 rounded">Seu Perfil</Link>
      </div>
    </div>
  );
};

export default Dashboard;
