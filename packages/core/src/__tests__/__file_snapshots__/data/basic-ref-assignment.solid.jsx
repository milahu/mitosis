import { createSignal } from "solid-js";

function MyBasicRefAssignmentComponent(props) {
  function handlerClick(event) {
    event.preventDefault();
    console.log("current value", holdValueRef);
    holdValueRef = holdValueRef + "JS";
  }

  return (
    <div>
      <button onClick={(evt) => handlerClick(evt)}>Click</button>
    </div>
  );
}

export default MyBasicRefAssignmentComponent;
