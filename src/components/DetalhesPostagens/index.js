import "./local.css";
export default function DetalhesPostagens({ data, setShow, ...rest }) {
  return (
    <section className="sectionModal">
      <div className="dataShow">
        <header>
          <span>Mensagem</span>
          <button onClick={() => setShow()}>X</button>
        </header>
        <main>Detalhes Postagens - {data.id}</main>
        <footer>Alguma Coisa</footer>
      </div>
    </section>
  );
}
