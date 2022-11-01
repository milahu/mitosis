import { Show } from "solid-js";

function MyComponent(props) {
  return (
    <div>
      {props.name}
      <Show when={props.name === "Batman"}>
        <MyComponent name="Bruce Wayne"></MyComponent>
      </Show>
    </div>
  );
}

export default MyComponent;
