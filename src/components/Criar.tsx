
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Criar() {
  const [User, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const AddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", User)
      .then((res) => {
        console.log(res);
        navigate("/cadastro-usuario");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg white shadow px-5 pt-3 pb-5 rounded">
        <h1>CRIAR USUARIO</h1>
        <form onSubmit={AddUser}>
          <div className="mb-2">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Digite o nome"
              onChange={(e) => setUser({ ...User, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Digite o email"

              onChange={(e) => setUser({ ...User, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Digite o telefone"
              onChange={(e) => setUser({ ...User, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">CRIAR</button>
          <Link to="/cadastro-usuario" className="btn btn-primary ms-3">
            RETORNAR
          </Link>
        </form>
      </div>
    </div>
  );
}
