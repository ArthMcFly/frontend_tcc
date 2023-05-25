import "./local.css";
export default function DetalhesCidades({ data, setShow, ...rest }) {
  return (
    <section className="sectionModal">
      <div className="dataShow">
        <header>
          <span>Mensagem</span>
          <button onClick={() => setShow()}>X</button>
        </header>
        <main>Detalhes Cidades - {data.id}</main>
        <footer>Alguma Coisa</footer>
      </div>
    </section>
  );
}
