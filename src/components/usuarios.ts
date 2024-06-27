import api from "./api";

interface UsuarioInterface {
  name: string;
  address: string
  cpf: string;
  birthDate:string
  cep: number,
  phone: number

}

const usuariosService = {
  listarUsuarios: async () => {
    const response = await api.get("usuarios");

    return response.data;
  },

  criarUsuario: async (usuario: UsuarioInterface) => {
    const response = await api.post("usuarios", usuario);
    return response.data;
  },

  atualizarUsuario: async (id: number, usuario: UsuarioInterface) => {
    const response = await api.put("usuarios/"+id, usuario);
    return response.data;
  },

  deletarUsuario: async (id: number) => {
    const response = await api.delete("usuarios/"+id);
    return response.data;
  },
};

export default usuariosService;