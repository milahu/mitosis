import { createSignal } from "solid-js";

function ClassNameCode(props) {
  const [bindings, setBindings] = createSignal("a binding");

  return (
    <div>
      <div class="no binding">Without Binding</div>
      <div class={bindings()}>With binding</div>
    </div>
  );
}

export default ClassNameCode;
