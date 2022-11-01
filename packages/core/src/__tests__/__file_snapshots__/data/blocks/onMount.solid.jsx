import { onMount } from "solid-js";

function Comp(props) {
  onMount(() => {
    console.log("Runs on mount");
  });

  return <div></div>;
}

export default Comp;
