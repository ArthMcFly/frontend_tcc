import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/index";
import Main from "./pages/Main/index";
import ConsultaUsuarios from "./pages/ConsultaUsuarios/index";
import ConsultaPostagens from "./pages/ConsultaPostagens/index";
import ConsultaMaterias from "./pages/ConsultaMaterias/index";

export default function Router() {
  return (
    <>
      {/*<Header />*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="materias" element={<ConsultaMaterias />} />
          <Route path="posts" element={<ConsultaPostagens />} />
          <Route path="usuarios" element={<ConsultaUsuarios />} />
        </Route>
      </Routes>
    </>
  );
}
