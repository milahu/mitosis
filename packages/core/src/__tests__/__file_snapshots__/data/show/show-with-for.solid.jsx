import { Show, For } from "solid-js";

function NestedShow(props) {
  return (
    <Show fallback={<div>else-condition-A</div>} when={props.conditionA}>
      <For each={props.items}>
        {(item, _index) => {
          const idx = _index();
          return <div key={idx}>{item}</div>;
        }}
      </For>
    </Show>
  );
}

export default NestedShow;
