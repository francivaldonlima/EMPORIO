import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default function mostrar() {
  interface UserData {
    name: string;
    email: string;
    phone: string;
  }
  
  const [dataUser, setDataUser] = useState<UserData>({ name: "", email: "", phone: "" });
  //un hook qui extrait id de l'URL actuelle
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setDataUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg white shadow px-5 pt-3 pb-5 rounded">
        <h1>Detail of User</h1>
        <div className="mb-2">
          <strong> NOME: {dataUser.name}</strong>
        </div>
        <div className="mb-2">
          <strong> EMAIL: {dataUser.email}</strong>
        </div>
        <div className="mb-2">
          <strong> TELEFONE: {dataUser.phone}</strong>
        </div>
        <Link to={`/atualizar/${id}`} className="btn btn-success">
          ATUALIZAR
        </Link>
        <Link to="/cadastro-usuario" className="btn btn-primary ms-3">
          RETORNAR
        </Link>
      </div>
    </div>
  );
}