import { onMount } from "solid-js";

function OnInit(props) {
  onMount(() => {
    console.log("onMount");
  });

  return <div></div>;
}

export default OnInit;
