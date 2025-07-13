
import React from "react";

const Catalog = () => {
  const mockServices = [
    { title: "Aula de Inglês", user: "maria@email.com" },
    { title: "Ajudar com jardinagem", user: "joao@email.com" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Catálogo de Serviços</h2>
      <ul className="space-y-2">
        {mockServices.map((service, idx) => (
          <li key={idx} className="border p-4 rounded shadow">
            <p><strong>Serviço:</strong> {service.title}</p>
            <p><strong>Usuário:</strong> {service.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
