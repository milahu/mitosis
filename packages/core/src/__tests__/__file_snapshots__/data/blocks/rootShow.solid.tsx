import { Show } from "solid-js";

function RenderStyles(props) {
  return (
    <Show fallback={<div>Foo</div>} when={props.foo === "bar"}>
      <div>Bar</div>
    </Show>
  );
}

export default RenderStyles;
