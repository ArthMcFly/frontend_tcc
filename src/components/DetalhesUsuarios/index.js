import "./local.css";
export default function DetalhesUsuarios({ data, setShow, ...rest }) {
  return (
    <section className="sectionModal">
      <div className="dataShow">
        <header>
          <span>Mensagem</span>
          <button onClick={() => setShow()}>X</button>
        </header>
        <main>Detalhes Usuários - {data.id}</main>
        <footer>Alguma Coisa</footer>
      </div>
    </section>
  );
}
