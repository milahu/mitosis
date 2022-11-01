import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  return (
    <div
      class={
        "test " +
        css({
          padding: "10px",
        })
      }
    >
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}

export default MyBasicComponent;
