
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

const Profile = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Perfil do Usuário</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UID:</strong> {user.uid}</p>
        </div>
      ) : (
        <p>Carregando informações...</p>
      )}
    </div>
  );
};

export default Profile;
