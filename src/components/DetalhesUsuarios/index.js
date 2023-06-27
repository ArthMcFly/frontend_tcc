import "./local.css";
export default function DetalhesUsuarios({ data, setShow, ...rest }) {
	return (
		<section className="sectionModal">
			<div className="dataShow">
				<header>
					<span>Mensagem</span>
					<button onClick={() => setShow()}>X</button>
				</header>
				<main>
					Id - {data.id}<br/>
					Foto - {data.usu_fotoperfil}<br/>
					Bio - {data.usu_bio}<br/>
					Nível - {data.usu_nivel}<br/>
					Senha - {data.usu_senha}
				</main>
				<footer>Alguma Coisa</footer>
			</div>
		</section>
	);
}
