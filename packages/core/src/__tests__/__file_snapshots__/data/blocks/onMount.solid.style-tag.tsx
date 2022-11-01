import { onMount } from "solid-js";

import { css } from "solid-styled-components";

function Comp(props) {
  onMount(() => {
    console.log("Runs on mount");
  });

  return (
    <>
      <div></div>
    </>
  );
}

export default Comp;
