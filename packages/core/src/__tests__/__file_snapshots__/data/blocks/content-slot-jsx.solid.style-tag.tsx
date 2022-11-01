import { Show } from "solid-js";

import { css } from "solid-styled-components";

function ContentSlotJsxCode(props) {
  return (
    <>
      <div>
        <Show when={props.slotTesting}>
          <div>{props.slotTesting}</div>
        </Show>
        <div>
          <hr />
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default ContentSlotJsxCode;
