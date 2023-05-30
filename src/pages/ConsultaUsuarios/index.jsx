import "./local.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import Tr from "../../components/Tr/index";

export default function ConsultaUsuarios() {
	const [data, setData] = useState([]);

	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(2);
	const [xTotalCount, setXTotalCount] = useState(-1);
	const [pages, setPages] = useState(-1);
	useEffect(() => {
		let url = `/usuarios?_page=${page}&_limit=${limit}`;

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
				<caption>Consulta de Usuários</caption>
				<thead>
					<th>Id</th>
					<th>Nome</th>
					<th>Email</th>
					<th>Senha</th>
					<th>Arroba</th>
					<th>Foto do Perfil</th>
					<th>Cor do Perfil</th>
					<th>Bio</th>
					<th>Nível</th>
					<th>Comandos</th>
				</thead>
				{data.map((element, index) => {
					return (
						<Tr data={element}>
							<td data-cell="id">{element.id}</td>
							<td data-cell="nome">{element.usu_nome}</td>
							<td data-cell="email">{element.usu_email}</td>
							<td data-cell="senha">{element.usu_senha}</td>
							<td data-cell="arroba">{element.usu_arroba}</td>
							<td data-cell="foto Perfil">{element.usu_fotoperfil}</td>
							<td data-cell="cor Perfil">{element.usu_corperfil}</td>
							<td data-cell="bio">{element.usu_bio}</td>
							<td data-cell="nivel">{element.usu_nivel}</td>
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
