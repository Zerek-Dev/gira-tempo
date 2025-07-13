import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        role: "user",
        createdAt: new Date(),
      });
      navigate("/dashboard");
    } catch (error) {
      alert("Erro ao registrar: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Registrar</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2" required />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2" required />
        <button type="submit" className="w-full bg-green-600 text-white p-2">Registrar</button>
      </form>
    </div>
  );
};

export default Register;