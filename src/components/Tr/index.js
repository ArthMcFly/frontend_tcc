import DetalhesMaterias from "../DetalhesMaterias/index";
import { useState } from "react";

export default function Tr({ children, data, ...rest }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <tr
        onClick={() => {
          setShow(true);
        }}
      >
        {children}
      </tr>
      {show && <DetalhesMaterias data={data} setShow={() => setShow(false)} />}
    </>
  );
}
