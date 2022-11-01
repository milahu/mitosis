import { Show } from "solid-js";

function NestedShow(props) {
  return (
    <Show fallback={<div>else-condition-A</div>} when={props.conditionA}>
      <Show fallback={<div>else-condition-B</div>} when={!props.conditionB}>
        <div>if condition A and condition B</div>
      </Show>
    </Show>
  );
}

export default NestedShow;
