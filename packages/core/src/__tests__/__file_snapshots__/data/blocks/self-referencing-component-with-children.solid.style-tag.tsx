import { Show } from "solid-js";

import { css } from "solid-styled-components";

function MyComponent(props) {
  return (
    <>
      <div>
        {props.name}
        {props.children}
        <Show when={props.name === "Batman"}>
          <MyComponent name="Bruce">
            <div>Wayne</div>
          </MyComponent>
        </Show>
      </div>
    </>
  );
}

export default MyComponent;
