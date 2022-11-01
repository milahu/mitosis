import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function MyBasicRefAssignmentComponent(props) {
  function handlerClick(event) {
    event.preventDefault();
    console.log("current value", holdValueRef);
    holdValueRef = holdValueRef + "JS";
  }

  return (
    <>
      <div>
        <button onClick={(evt) => handlerClick(evt)}>Click</button>
      </div>
    </>
  );
}

export default MyBasicRefAssignmentComponent;
