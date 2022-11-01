import { css } from "solid-styled-components";

function NestedStyles(props) {
  return (
    <div
      class={css({
        display: "flex",
        foo: "var(--bar)",
        "@media (max-width: env(--mobile))": {
          display: "block",
        },
        "&:hover": {
          display: "flex",
        },
        ".nested-selector": {
          display: "grid",
        },
      })}
    >
      Hello world
    </div>
  );
}

export default NestedStyles;
