import axios from "axios";
import { Link } from "react-router-dom";
import MyNavbar from "./Navbar";
import { useEffect, useState } from "react";




export default function Home() {
    interface UserData {
        id: number;
        name: string;
        email: string;
        phone: string;
    }

    const [dataUser, setDataUser] = useState<UserData[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/users")
            //renovoi d'une reponse si la requette est reussie, la reponse contient data
            .then((res) => setDataUser(res.data))
            //erreur si non
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id: number) => {
        const confirm = window.confirm("GOSTARIA DE DELETAR O REGISTRO ?");
        if (confirm) {
            axios
                .delete("http://localhost:3000/users/" + id)
                .then((res) => {
                    //au lieu d'utiliser navigate('/')
                    window.location.reload();
                })
                .catch((err) => console.log(err));
        }
    };
    return (
        <div>
            <MyNavbar />


            <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
                

                    <h1>LISTA DE USUÁRIOS</h1>
                    <div className="w-100 rounded bg-white border shadow p-4">
                        <div className="d-flex justify-content-end">
                            <Link to="/Criar-usuario" className="btn btn-success">
                                ADICIONAR
                            </Link>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOME</th>
                                    <th>EMAIL</th>
                                    <th>TELEFONE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Afficher les données ici */}
                                {dataUser.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>

                                        <td>
                                            <Link
                                                to={`/mostrar/${user.id}`}
                                                className="btn btn-sm btn-info me-2"
                                            >
                                                LER
                                            </Link>
                                            <Link
                                                to={`/atualizar/${user.id}`}
                                                className="btn btn-sm btn-primary me-2"
                                            >
                                                EDITAR
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="btn btn-sm btn-danger "
                                            >
                                                DELETAR
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                

            </div>
        </div>






  );
}