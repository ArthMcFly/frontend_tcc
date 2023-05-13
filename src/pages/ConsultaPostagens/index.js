import "./styles.css";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";

export default function ConsultaPostagens() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // let url = "/cidades?cid_nome_like=TU";

    let url = "/postagens";
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
        <caption>Consulta de Postagens</caption>
        <thead>
          <th>Id</th>
          <th>Texto</th>
          <th>Curtidas</th>
          <th>Comandos</th>
        </thead>
        {data.map((element, index) => {
          return (
            <tr>
              <td data-cell="id">{element.id}</td>
              <td data-cell="texto">{element.pos_texto}</td>
              <td data-cell="curtidas">{element.pos_curtidas}</td>
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
