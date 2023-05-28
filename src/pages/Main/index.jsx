import { Link, useNavigate } from "react-router-dom";
export default function Main() {
  return (
    <>
      <h1>Qual entidade deseja consultar?</h1>
      <p>
        <Link to="/materias"> Matérias </Link>
      </p>
      <p>
        <Link to="/usuarios"> Usuarios </Link>
      </p>
      <p>
        <Link to="/posts"> Posts </Link>
      </p>
    </>
  );
}
