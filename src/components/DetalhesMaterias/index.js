import "./local.css";
export default function DetalhesMaterias({ data, setShow, ...rest }) {
	return (
		<section className="sectionModal">
			<div className="dataShow">
				<header>
					<span>Mensagem</span>
					<button onClick={() => setShow()}>X</button>
				</header>
				<main>
					Id - {data.id}<br/>
					Matéria - {data.mat_nome}<br/>
					Cor - {data.mat_cor}
				</main>
				<footer>Alguma Coisa</footer>
			</div>
		</section>
	);
}
