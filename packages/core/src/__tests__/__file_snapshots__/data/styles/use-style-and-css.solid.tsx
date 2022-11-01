import { css } from "solid-styled-components";

function MyComponent(props) {
  return (
    <button
      class={css({
        background: "blue",
        color: "white",
      })}
      type="button"
    >
      Button
    </button>
  );
}

export default MyComponent;
