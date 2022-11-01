import { Show } from "solid-js";

function ContentSlotJsxCode(props) {
  return (
    <div>
      <Show when={props.slotTesting}>
        <div>{props.slotTesting}</div>
      </Show>
      <div>
        <hr />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default ContentSlotJsxCode;
