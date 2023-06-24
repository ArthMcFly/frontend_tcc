import "./local.css";
export default function DetalhesMaterias({ data, setShow, ...rest }) {
  return (
    <section className="sectionModal">
      <div className="dataShow">
        <header>
          <span>Mensagem</span>
          <button onClick={() => setShow()}>X</button>
        </header>
        <main>Detalhes Matérias - {data.id}</main>
        <footer>Alguma Coisa</footer>
      </div>
    </section>
  );
}
