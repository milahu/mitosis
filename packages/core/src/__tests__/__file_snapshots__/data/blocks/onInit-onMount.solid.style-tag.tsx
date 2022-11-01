import { onMount } from "solid-js";

import { css } from "solid-styled-components";

function OnInit(props) {
  onMount(() => {
    console.log("onMount");
  });

  return (
    <>
      <div></div>
    </>
  );
}

export default OnInit;
