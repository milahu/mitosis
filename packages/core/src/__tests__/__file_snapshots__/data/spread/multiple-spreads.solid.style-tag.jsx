import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function MyBasicComponent(props) {
  const [attrs, setAttrs] = createSignal({
    hello: "world",
  });

  return (
    <>
      <input {...attrs()} {...props} />
    </>
  );
}

export default MyBasicComponent;
