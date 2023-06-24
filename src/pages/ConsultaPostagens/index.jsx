import "./local.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
import Tr from "../../components/TrPos/index"; 

export default function ConsultaPostagens() {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(2);
	const [xTotalCount, setXTotalCount] = useState(-1);
	const [pages, setPages] = useState(-1);


	useEffect(() => {
		let url = `/postagens?_page=${page}&_limit=${limit}`;

		const fetchData = async () => {
			const response = await api(url);
			const xtotal = response.headers.get("x-total-count");
			const pages = Math.ceil(xtotal / limit );
			setPages(pages);
			setXTotalCount(xtotal);
			const data = await response.json();
			setData(data);
		};
		fetchData();
	}, [limit, page]);

	return (
		<div>
			<table align="center" className="tabela">
				<caption>Consulta de Postagens</caption>
				<thead>
					<th>Id</th>
					<th>Texto</th>
					<th>Imagem</th>
					<th>Curtidas</th>
					<th>Resposta</th>
					<th>Texto Resposta</th>
					<th>Curtidas Resposta</th>
					<th>Comandos</th>	
				</thead>
				{data.map((element, index) => {
					return (
						<Tr data={element}>
							<td data-cell="id">{element.id}</td>
							<td data-cell="texto">{element.pos_texto}</td>
							<td data-cell="imagem">{element.pos_imagem}</td>
							<td data-cell="curtidas">{element.pos_curtidas}</td>
							<td data-cell="resposta">{element.pos_respostaid}</td>
							<td data-cell="textoresposta">{element.pos_textoresposta}</td>
							<td data-cell="curtidasresposta">{element.pos_curtidasresposta}</td>
							<td data-cell="">
								<button>Alterar</button>
								<button>Excluir</button>
							</td>
						</Tr>
					);
				})}
			</table>
			<div>
				<div>
					<span>Itens</span>
					<select
						value={limit}
						onChange={(e) => {
							setLimit(e.target.value);
						}}
					>
						<option value="5"> 5 </option>
						<option value="10"> 10 </option>
						<option value="15"> 15 </option>
						<option value="20"> 20 </option>
					</select>
				</div>
				<div>
					<span>Página</span>
					<select
						value={page}
						onChange={(e) => {
							setPage(e.target.value);
						}}
					>
						{Array.from({ length: pages }, (_, i) => i + 1).map((element) => {
							return <option value={`${element}`}> {element} </option>;
						})}
					</select>
				</div>
				<Link to="/">Voltar</Link>
			</div>
		</div>
	);
}
