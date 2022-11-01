import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function ClassNameCode(props) {
  const [bindings, setBindings] = createSignal("a binding");

  return (
    <>
      <div>
        <div class="no binding">Without Binding</div>
        <div class={bindings()}>With binding</div>
      </div>
    </>
  );
}

export default ClassNameCode;
