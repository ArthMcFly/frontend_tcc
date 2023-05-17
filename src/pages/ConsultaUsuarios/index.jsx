import "./local.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

export default function ConsultaCidades() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // let url = "/cidades?cid_nome_like=TU";

    let url = "/usuarios";
    const fetchData = async () => {
      const response = await api(url);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <table align="center" className="tabela">
        <caption>Consulta de Usuários</caption>
        <thead>
          <th>id</th>
          <th>Nome</th>
          <th>Nível</th>
          <th>Comandos</th>
        </thead>
        {data.map((element, index) => {
          return (
            <tr>
              <td data-cell="id">{element.id}</td>
              <td data-cell="cidade">{element.usu_nome}</td>
              <td data-cell="estado">{element.usu_nivel}</td>
              <td data-cell="">
                <button>Alterar</button>
                <button>Excluir</button>
              </td>
            </tr>
          );
        })}
      </table>
      <Link to="/"> Voltar </Link>
    </div>
  );
}
