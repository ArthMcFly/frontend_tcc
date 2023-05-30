import "./local.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import Tr from "../../components/Tr/index";

export default function ConsultaMaterias() {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(2);
	const [xTotalCount, setXTotalCount] = useState(-1);
	const [pages, setPages] = useState(-1);

	useEffect(() => {
		let url = `/materias?_page=${page}&_limit=${limit}`;

		const fetchData = async () => {
			const response = await api(url);
			const xtotal = response.headers.get("x-total-count");
			const pages = Math.ceil(xtotal / limit);
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
				<caption>Consulta de Matérias</caption>
				<thead>
					<th>Id</th>
					<th>Matérias</th>
					<th>Cor</th>
					<th>Comandos</th>
				</thead>
				{data.map((element, index) => {
					return (
						<Tr data={element}>
							<td data-cell="id">{element.id}</td>
							<td data-cell="materia">{element.mat_nome}</td>
							<td data-cell="cor">{element.mat_cor}</td>
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
