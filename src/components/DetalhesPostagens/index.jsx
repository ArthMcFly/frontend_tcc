import "./local.css";
export default function DetalhesPostagens({ data, setShow, ...rest }) {
	return (
		<section className="sectionModal">
			<div className="dataShow">
				<header>
					<span>Mensagem</span>
					<button onClick={() => setShow()}>X</button>
				</header>
				<main>
					Id - {data.id}<br/>
					Imagem - {data.pos_imagem}<br/>
					Curtidas - {data.pos_curtidas}
				</main>
				<footer>Alguma Coisa</footer>
			</div>
		</section>
	);
}
