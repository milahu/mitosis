import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  const [classState, setClassState] = createSignal("testClassName");

  const [styleState, setStyleState] = createSignal({
    color: "red",
  });

  return (
    <>
      <div class={classState() + " div-6062fca3"} style={styleState()}>
        Hello! I can run in React, Vue, Solid, or Liquid!
      </div>
      <style jsx>{`
        .div-6062fca3 {
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default MyBasicComponent;
