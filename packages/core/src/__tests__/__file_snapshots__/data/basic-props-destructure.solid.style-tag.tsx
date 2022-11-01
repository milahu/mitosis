import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  const [name, setName] = createSignal("Decadef20");

  return (
    <>
      <div>
        {props.children}
        {props.type}
        Hello! I can run in React, Vue, Solid, or Liquid!
      </div>
    </>
  );
}

export default MyBasicComponent;
