
import DetalhesUsuarios from "../DetalhesUsuarios/index";
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
      {show && <DetalhesUsuarios data={data} setShow={() => setShow(false)} />}
    </>
  );
}
