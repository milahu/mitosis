import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  const [classState, setClassState] = createSignal("testClassName");

  const [styleState, setStyleState] = createSignal({
    color: "red",
  });

  return (
    <div
      class={
        classState() +
        " " +
        css({
          padding: "10px",
        })
      }
      style={styleState()}
    >
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}

export default MyBasicComponent;
