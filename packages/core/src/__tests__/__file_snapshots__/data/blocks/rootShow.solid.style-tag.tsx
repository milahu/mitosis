import { Show } from "solid-js";

import { css } from "solid-styled-components";

function RenderStyles(props) {
  return (
    <>
      <Show fallback={<div>Foo</div>} when={props.foo === "bar"}>
        <div>Bar</div>
      </Show>
    </>
  );
}

export default RenderStyles;
