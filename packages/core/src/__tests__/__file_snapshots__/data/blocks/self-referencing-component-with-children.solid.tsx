import { Show } from "solid-js";

function MyComponent(props) {
  return (
    <div>
      {props.name}
      {props.children}
      <Show when={props.name === "Batman"}>
        <MyComponent name="Bruce">
          <div>Wayne</div>
        </MyComponent>
      </Show>
    </div>
  );
}

export default MyComponent;
