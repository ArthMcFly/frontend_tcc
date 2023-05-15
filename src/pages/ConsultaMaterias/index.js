import "./local.css";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";

export default function ConsultaMaterias() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // let url = "/cidades?cid_nome_like=TU";

    let url = "/materias";
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
        <caption>Consulta de Materias</caption>
        <thead>
          <th>Id</th>
          <th>Materias</th>
          <th>Cor</th>
          <th>Comandos</th>
        </thead>
        {data.map((element, index) => {
          return (
            <tr>
              <td data-cell="id">{element.id}</td>
              <td data-cell="materia">{element.mat_nome}</td>
              <td data-cell="cor">{element.mat_cor}</td>
              <td data-cell="">
                <button>Alterar</button>
                <button>Excluir</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
