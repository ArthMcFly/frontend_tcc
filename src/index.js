import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import ConsultaUsuarios from "./pages/ConsultaUsuarios/index";
import ConsultaPostagens from "./pages/ConsultaPostagens/index";
import ConsultaMaterias from "./pages/ConsultaMaterias/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
	  <ConsultaUsuarios />
	  <ConsultaMaterias />
	  <ConsultaPostagens />
  </StrictMode>
);
